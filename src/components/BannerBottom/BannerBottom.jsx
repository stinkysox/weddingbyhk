import React from "react";
import { motion } from "framer-motion";
import "./BannerBottom.css";

const BannerBottom = ({ title, backgroundImage }) => {
  return (
    <div
      className="banner-bottom"
      style={{
        backgroundImage: `linear-gradient(rgba(4, 9, 30, 0.1), rgba(4, 9, 30, 0.1)), url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center", // 🔥 This line centers the image
        backgroundRepeat: "no-repeat",
      }}
    >
      <motion.h1
        className="banner-bottom-heading"
        initial={{ x: "-100%", opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.4 }}
      >
        {title}
      </motion.h1>
    </div>
  );
};

export default BannerBottom;
