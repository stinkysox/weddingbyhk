import React from "react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { Camera } from "lucide-react";
import { motion } from "framer-motion"; // ✅ Import motion
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Logo + Tagline */}
        <div className="footer-brand">
          <motion.div
            className="logo-title"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
          >
            <Camera size={24} strokeWidth={2.2} />
            <span>Wedding By HK</span>
          </motion.div>
          <p className="footer-tagline">
            Turning your wedding moments into cinematic memories and lasting
            frames.
          </p>
        </div>

        {/* Social Icons */}
        <div className="footer-socials">
          <a
            href="https://www.instagram.com/weddings_by_hk?utm_source=ig_web_button_share_sheet&igsh=Nm1kaGc4azJycW9o"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>

          <a
            href="https://wa.me/+918979841076"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Wedding By HK. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
