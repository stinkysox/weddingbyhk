import React from "react";
import "./Navbar.css";
import { IoLogoInstagram } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { motion } from "framer-motion";
import { Camera } from "lucide-react"; // Lucide Camera Icon

const Navbar = () => {
  return (
    <section className="navbar">
      <div className="navbar-one">
        <motion.div
          className="logo-title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
        >
          <Camera size={24} strokeWidth={2.2} /> {/* Camera icon */}
          Wedding By Hk
        </motion.div>
      </div>

      {/* Social icons */}
      <div className="navbar-socials">
        <motion.div
          className="nav-social-media-icon instagram"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          whileHover={{
            rotate: [0, -10, 10, -10, 10, 0],
            transition: { duration: 0.4 },
          }}
        >
          <a
            href="https://www.instagram.com/weddings_by_hk?igsh=bXB3bmlkcHhtbjF4"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IoLogoInstagram />
          </a>
        </motion.div>

        <motion.div
          className="nav-social-media-icon facebook"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          whileHover={{
            rotate: [0, -10, 10, -10, 10, 0],
            transition: { duration: 0.4 },
          }}
        ></motion.div>
      </div>
    </section>
  );
};

export default Navbar;
