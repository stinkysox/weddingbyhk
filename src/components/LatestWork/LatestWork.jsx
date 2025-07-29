import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaInstagram } from "react-icons/fa";
import "./LatestWork.css";

// Animation configurations
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      when: "beforeChildren",
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

const initialCategories = {
  Wedding: [
    {
      imageUrl: "https://i.postimg.cc/66f4k6Rv/IMG-2377.jpg",
      category: "Wedding",
    },

    {
      imageUrl: "https://i.postimg.cc/1X7mydsL/IMG-0682.jpg",
      category: "Wedding",
    },

    {
      imageUrl: "https://i.postimg.cc/XJV4dWvR/IMG-9382.jpg",
      category: "Wedding",
    },
    {
      imageUrl: "https://i.postimg.cc/QxRbtx4d/IMG-9017.jpg",
      category: "Wedding",
    },
    {
      imageUrl: "https://i.postimg.cc/25j2p99Q/IMG-9020.jpg",
      category: "Wedding",
    },

    {
      imageUrl: "https://i.postimg.cc/RZZHvr9Z/IMG-9016.jpg",
      category: "Wedding",
    },
    {
      imageUrl: "https://i.postimg.cc/gJ8wgmyN/IMG-8987.jpg",
      category: "Wedding",
    },
    {
      imageUrl: "https://i.postimg.cc/vH34qP9F/IMG-9013.jpg",
      category: "Wedding",
    },
    {
      imageUrl: "https://i.postimg.cc/x8j0L26k/IMG-9009.jpg",
      category: "Wedding",
    },
    {
      imageUrl: "https://i.postimg.cc/xdSVKQC0/IMG-9004.jpg",
      category: "Wedding",
    },
    {
      imageUrl: "https://i.postimg.cc/bY2xDfKC/IMG-7865.jpg",
      category: "Wedding",
    },
    {
      imageUrl: "https://i.postimg.cc/0jf2MQxK/IMG-7840.jpg",
      category: "Wedding",
    },
    {
      imageUrl: "https://i.postimg.cc/sXCVTSgZ/IMG-7848.jpg",
      category: "Wedding",
    },
    {
      imageUrl: "https://i.postimg.cc/CKGyL2wz/IMG-8986.jpg",
      category: "Wedding",
    },
  ],

  Prewedding: [
    {
      imageUrl: "https://i.postimg.cc/z3m09J4v/IMG-6826.jpg",
      category: "Pre-wedding",
    },
    {
      imageUrl: "https://i.postimg.cc/pT4wLMgb/IMG-6800.jpg",
      category: "Pre-wedding",
    },
    {
      imageUrl: "https://i.postimg.cc/jStG5Xk5/IMG-6801.jpg",
      category: "Pre-wedding",
    },
    {
      imageUrl: "https://i.postimg.cc/rmrhg0Y3/IMG-6796.jpg",
      category: "Pre-wedding",
    },
    {
      imageUrl: "https://i.postimg.cc/GpZKB3hQ/IMG-6792.jpg",
      category: "Pre-wedding",
    },
    {
      imageUrl: "https://i.postimg.cc/g218sSFc/IMG-6790.jpg",
      category: "Pre-wedding",
    },
    {
      imageUrl: "https://i.postimg.cc/8ck6cxW4/IMG-6786.jpg",
      category: "Pre-wedding",
    },
    {
      imageUrl: "https://i.postimg.cc/Rh0W4K5b/IMG-6785.jpg",
      category: "Pre-wedding",
    },
    {
      imageUrl: "https://i.postimg.cc/wBcMN09G/IMG-6780.jpg",
      category: "Pre-wedding",
    },
    {
      imageUrl: "https://i.postimg.cc/cLc6gFx5/IMG-6787.jpg",
      category: "Pre-wedding",
    },
    {
      imageUrl: "https://i.postimg.cc/MK581NBR/IMG-6784.jpg",
      category: "Pre-wedding",
    },
    {
      imageUrl: "https://i.postimg.cc/k4QHqRF8/IMG-6782.jpg",
      category: "Pre-wedding",
    },
    {
      imageUrl: "https://i.postimg.cc/mZdwMSDk/IMG-6779.jpg",
      category: "Pre-wedding",
    },
  ],

  "Baby Shoot": [
    {
      imageUrl:
        "https://i.pinimg.com/736x/5a/87/af/5a87af322162d541f74d7a762fc98543.jpg",
      category: "Baby Shoot",
    },
    {
      imageUrl:
        "https://i.pinimg.com/736x/28/47/d6/2847d640a6f7a3eb98244e98e0a171b3.jpg",
      category: "Baby Shoot",
    },
    {
      imageUrl:
        "https://i.pinimg.com/736x/5a/87/af/5a87af322162d541f74d7a762fc98543.jpg",
      category: "Baby Shoot",
    },

    {
      imageUrl:
        "https://i.pinimg.com/736x/a6/33/db/a633db1344685ae434bb7672f5a84d52.jpg",
      category: "Baby Shoot",
    },
    {
      imageUrl:
        "https://i.pinimg.com/736x/a9/12/35/a91235fbbbeae6a77447cf339b6c3491.jpg",
      category: "Baby Shoot",
    },
  ],
};

const LatestWork = () => {
  const categoryKeys = Object.keys(initialCategories);
  const [activeCategory, setActiveCategory] = useState(categoryKeys[0] || "");
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="latest-work">
      <h2>Our Latest Work</h2>

      <div className="category-buttons">
        {categoryKeys.map((category) => (
          <button
            key={category}
            className={category === activeCategory ? "active" : ""}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          className="image-grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          key={activeCategory}
        >
          {initialCategories[activeCategory] &&
          initialCategories[activeCategory].length > 0 ? (
            initialCategories[activeCategory].map((imageObj, index) => (
              <motion.div
                key={`${activeCategory}-${index}`}
                variants={itemVariants}
                style={{ overflow: "hidden" }}
              >
                <img
                  src={imageObj.imageUrl}
                  alt={`${activeCategory} photo ${index + 1}`}
                  className="gallery-img"
                  onClick={() => setSelectedImage(imageObj.imageUrl)}
                />
              </motion.div>
            ))
          ) : (
            <motion.div
              className="empty-images"
              key="empty"
              variants={itemVariants}
            >
              <p className="no-images">No images available in this category.</p>
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="modal"
            onClick={() => setSelectedImage(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.img
              src={selectedImage}
              alt="Enlarged view"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
              className="modal-image"
            />
            <button
              className="modal-close-btn"
              onClick={() => setSelectedImage(null)}
            >
              Close
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="instagram-icon">
        <a
          href="https://www.instagram.com/pramod.photogrphy/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram size={30} />
        </a>
      </div>
    </div>
  );
};

export default LatestWork;
