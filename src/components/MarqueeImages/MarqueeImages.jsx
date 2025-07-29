import React from "react";
import Marquee from "react-fast-marquee";
import "./MarqueeImages.css";

const MarqueeImages = () => {
  const categories = {
    "Right Images": [
      {
        imageUrl: "https://i.postimg.cc/mk2JGKty/IMG-2374.jpg",
      },
      {
        imageUrl: "https://i.postimg.cc/66f4k6Rv/IMG-2377.jpg",
      },
      {
        imageUrl: "https://i.postimg.cc/kMQW7vrD/IMG-2375.jpg",
      },
      {
        imageUrl:
          "https://i.postimg.cc/02dYnct7/C494535-D-B877-4384-BD41-F0-EE3407-BD13.jpg",
      },
      {
        imageUrl: "https://i.postimg.cc/4xSWpQxs/IMG-9028.jpg",
      },

      {
        imageUrl: "https://i.postimg.cc/XJV4dWvR/IMG-9382.jpg ",
      },
    ],
    "Left Images": [
      {
        imageUrl: "https://i.postimg.cc/Hn6GQ8N5/IMG-2368.jpg",
      },
      {
        imageUrl: "https://i.postimg.cc/vBJrqjFt/IMG-5895.jpg",
      },
      {
        imageUrl: "https://i.postimg.cc/bv4FfH73/IMG-9381.jpg",
      },
      {
        imageUrl: "https://i.postimg.cc/ZqYVp149/IMG-5999.jpg",
      },

      {
        imageUrl: " https://i.postimg.cc/1X7mydsL/IMG-0682.jpg",
      },
    ],
  };

  const rightImages = categories["Right Images"];
  const leftImages = categories["Left Images"];

  // Generate empty placeholders if no images present
  const generateEmptyImages = (count = 5) =>
    Array.from({ length: count }, (_, i) => (
      <div key={`empty-${i}`} className="empty-img" />
    ));

  // Render images with lazy loading & descriptive alt text
  const renderImages = (imagesArray, direction) => {
    if (!imagesArray || imagesArray.length === 0) return generateEmptyImages();

    return imagesArray.map((imgObj, idx) => (
      <img
        key={`${direction}-${idx}`}
        className="marquee-img"
        src={imgObj.imageUrl}
        alt={`${direction === "right" ? "Right" : "Left"} Slide Image ${
          idx + 1
        }`}
        loading="lazy"
        draggable={false}
      />
    ));
  };

  return (
    <>
      <div className="marquee-container">
        <Marquee
          speed={50}
          gradient={false}
          pauseOnHover={false}
          direction="right"
        >
          {renderImages(rightImages, "right")}
        </Marquee>
      </div>

      <div className="marquee-container">
        <Marquee
          speed={50}
          gradient={false}
          pauseOnHover={false}
          direction="left"
        >
          {renderImages(leftImages, "left")}
        </Marquee>
      </div>
    </>
  );
};

export default MarqueeImages;
