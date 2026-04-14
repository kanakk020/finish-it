import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <motion.div 
      className="page-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      style={{ textAlign: 'center', position: 'relative' }}
    >
      {/* Background Glow */}
      <div style={{
        position: "absolute",
        width: "50vw",
        height: "50vw",
        maxWidth: "600px",
        maxHeight: "600px",
        background: "radial-gradient(circle, rgba(255,71,87,0.15), transparent 70%)",
        filter: "blur(80px)",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        zIndex: -1,
        pointerEvents: "none"
      }} />

      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
        style={{ fontSize: "4rem", marginBottom: "1rem", lineHeight: 1.1 }}
      >
        Finish What You <span className="gradient-text">Started</span> 🚀
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        style={{ fontSize: "1.4rem", color: "var(--text-muted)", marginBottom: "3rem", maxWidth: "600px" }}
      >
        Stop abandoning projects. Stop hiding in the shadows. Commit publicly and finally ship.
      </motion.p>

      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap", justifyContent: "center" }}
      >
        <Link to="/contact">
          <motion.button 
            className="btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Submit Project 🚀
          </motion.button>
        </Link>

        <Link to="/shelf">
          <motion.button 
            className="btn-secondary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore The Shelf 📚
          </motion.button>
        </Link>
      </motion.div>

    </motion.div>
  );
}