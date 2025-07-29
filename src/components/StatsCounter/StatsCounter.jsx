import React from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./StatsCounter.css";

const stats = [
  { count: 400, label: "Marriage Shoots", photos: "400 Photo Album" },
  { label: "15-20 Prewedding Edit photos", photos: "—", hideCount: true },
  { label: "Traditional Video", photos: "2 to 3 hours", hideCount: true },
  { label: "Cinematic Video", photos: "3–4 minutes", hideCount: true },
  { label: "Wedding Reels", photos: "2", hideCount: true },
  { count: 150, label: "Engagement Shoots", photos: "150 Photo Album" },
  { count: 30, label: "Baby Shoots", photos: "150 Photo Album" },
  { count: 25, label: "Maternity Shoots", photos: "—" },
];

const StatsCounter = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <div className="stats-wrapper" ref={ref}>
      {stats.map((item, index) => (
        <motion.div
          className="stat-item"
          key={index}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: index * 0.2 }}
        >
          {!item.hideCount && (
            <h2>{inView && <CountUp end={item.count} duration={2} />}+</h2>
          )}
          <p>{item.label}</p>
          {item.photos !== "—" && (
            <span className="photo-info">{item.photos}</span>
          )}
        </motion.div>
      ))}
    </div>
  );
};

export default StatsCounter;
