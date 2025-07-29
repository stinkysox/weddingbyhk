import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo,
} from "react";
import "./TeasersSection.css";

// SVG Icons as separate components for better performance
const PlayIcon = React.memo(() => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M8 5V19L19 12L8 5Z" fill="currentColor" />
  </svg>
));

const ExternalLinkIcon = React.memo(() => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7 17L17 7M17 7H7M17 7V17"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
));

// Individual reel component for better performance
const ReelItem = React.memo(({ url, index, isVisible, onRef }) => {
  const reelId = useMemo(() => {
    const match = url.match(/\/reel\/([^\/]+)/);
    return match ? match[1] : null;
  }, [url]);

  if (!reelId) return null;

  return (
    <div
      ref={onRef}
      className={`reel-item ${isVisible ? "animate-in" : ""}`}
      style={{
        animationDelay: `${index * 0.1}s`,
        "--animation-order": index,
      }}
    >
      <div className="reel-wrapper">
        <iframe
          src={`https://www.instagram.com/reel/${reelId}/embed/`}
          width="100%"
          height="100%"
          frameBorder="0"
          scrolling="no"
          allowTransparency="true"
          loading="lazy"
          title={`Instagram Reel ${index + 1}`}
          referrerPolicy="no-referrer-when-downgrade"
        />
        <div className="reel-overlay">
          <div className="play-button">
            <PlayIcon />
          </div>
        </div>
      </div>
    </div>
  );
});

const TeasersSection = () => {
  // Configuration - easy to modify
  const SECTION_CONFIG = useMemo(
    () => ({
      title: "Behind the Lens",
      subtitle: "Capturing moments in motion",
      instagramHandle: "your_handle", // Replace with actual handle
      observerOptions: {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      },
    }),
    []
  );

  // Instagram reel links - moved to useMemo for optimization
  const instagramReels = useMemo(
    () => [
      "https://www.instagram.com/reel/DIEZs71BJEr/?igsh=MWhmeGg2dHJwbHVlcA==",
      "https://www.instagram.com/reel/DDUgYDESiSF/?igsh=MmozcDlvc3FjZDlk",
      "https://www.instagram.com/reel/C7MKb7ahfh3/?utm_source=ig_web_copy_link&igsh=dzh0NnZvMm01ZnM5",
      "https://www.instagram.com/reel/DFp4Uk8SZBB/?utm_source=ig_web_copy_link&igsh=MWZ2OWh5c3o5ZXVydw==",
      "https://www.instagram.com/reel/DI80v7ahgqx/?utm_source=ig_web_copy_link&igsh=azZkaTA2aWJldTF0",
    ],
    []
  );

  const [visibleItems, setVisibleItems] = useState(new Set());
  const reelRefs = useRef(new Array(instagramReels.length));
  const observerRef = useRef(null);

  // Optimized intersection observer callback
  const handleIntersection = useCallback(
    (entries) => {
      const newVisibleItems = new Set(visibleItems);

      entries.forEach((entry) => {
        const index = reelRefs.current.indexOf(entry.target);
        if (index !== -1) {
          if (entry.isIntersecting) {
            newVisibleItems.add(index);
          }
          // Optionally remove items when they leave viewport for performance
          // else { newVisibleItems.delete(index); }
        }
      });

      if (newVisibleItems.size !== visibleItems.size) {
        setVisibleItems(newVisibleItems);
      }
    },
    [visibleItems]
  );

  // Set up intersection observer
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      handleIntersection,
      SECTION_CONFIG.observerOptions
    );

    const currentRefs = reelRefs.current.filter(Boolean);
    currentRefs.forEach((ref) => observerRef.current?.observe(ref));

    return () => {
      observerRef.current?.disconnect();
    };
  }, [handleIntersection, SECTION_CONFIG.observerOptions]);

  // Optimized ref callback
  const setReelRef = useCallback(
    (index) => (el) => {
      reelRefs.current[index] = el;
      if (el && observerRef.current) {
        observerRef.current.observe(el);
      }
    },
    []
  );

  // Instagram profile URL
  const instagramUrl = useMemo(
    () => `https://www.instagram.com/${SECTION_CONFIG.instagramHandle}/`,
    [SECTION_CONFIG.instagramHandle]
  );

  return (
    <section
      className="teasers-section"
      role="region"
      aria-label="Instagram Reels"
    >
      <div className="animated-background" aria-hidden="true" />

      <div className="content-wrapper">
        <header className="section-header">
          <h2 className="section-title">{SECTION_CONFIG.title}</h2>
          <p className="section-subtitle">{SECTION_CONFIG.subtitle}</p>
        </header>

        <div
          className="reels-grid"
          role="grid"
          aria-label="Instagram reels collection"
        >
          {instagramReels.map((url, index) => (
            <ReelItem
              key={`reel-${index}`}
              url={url}
              index={index}
              isVisible={visibleItems.has(index)}
              onRef={setReelRef(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// Display names for better debugging
PlayIcon.displayName = "PlayIcon";
ExternalLinkIcon.displayName = "ExternalLinkIcon";
ReelItem.displayName = "ReelItem";
TeasersSection.displayName = "TeasersSection";

export default React.memo(TeasersSection);
