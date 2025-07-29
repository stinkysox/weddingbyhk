import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./GridComponent.css";

const GridComponent = () => {
  const images = [
    {
      id: 1,
      src: "https://i.postimg.cc/LXPQVVs8/RJK02956.jpg",
      alt: "Beautiful landscape",
      title: "",
      size: "large",
    },
    {
      id: 2,
      src: "https://i.postimg.cc/SNdTVRmC/DTP01106.jpg",
      alt: "",
      title: "",
      size: "small",
    },
    {
      id: 3,
      src: "https://i.postimg.cc/d1GnCtW7/DTP01326.jpg",
      alt: "",
      title: "",
      size: "small",
    },
    {
      id: 4,
      src: "https://i.postimg.cc/zXzpLNTB/ABI02713.jpg",
      alt: "",
      title: "",
      size: "tall",
    },
    {
      id: 5,
      src: "https://i.postimg.cc/GhmJLQ1T/SPA03953.jpg",
      alt: "",
      title: "",
      size: "wide",
    },
    {
      id: 6,
      src: "https://i.postimg.cc/7L0SstSd/RJK02947.jpg",
      alt: "",
      title: "",
      size: "medium",
    },
  ];

  return (
    <div className="bento-container">
      <div className="bento-grid">
        {images.map((image) => {
          const ref = useRef(null);
          const isInView = useInView(ref, {
            once: true,
            margin: "0px 0px -100px 0px",
          });

          return (
            <motion.div
              key={image.id}
              ref={ref}
              className={`bento-card ${image.size}`}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="image-wrapper">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="bento-image"
                  loading="lazy"
                />
                <div className="image-overlay">
                  <h3 className="image-title">{image.title}</h3>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default GridComponent;
