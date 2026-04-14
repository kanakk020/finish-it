import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  },
  exit: { opacity: 0, y: 20, transition: { duration: 0.3 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, type: "spring" } }
};

export default function About() {
  return (
    <motion.div 
      className="page-container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <motion.h1 
        variants={itemVariants}
        className="gradient-text"
        style={{ fontSize: "3rem", marginBottom: "2rem" }}
      >
        Why Finish It Exists 🪦
      </motion.h1>

      <motion.div variants={itemVariants} style={{ maxWidth: "700px", textAlign: "center" }}>
        <p style={{ fontSize: "1.2rem", color: "var(--text-muted)", marginBottom: "1.5rem", lineHeight: 1.6 }}>
          Every developer starts projects with excitement. But most of them never get finished. Not because of lack of skill — but lack of consistency.
        </p>
        <p style={{ fontSize: "1.2rem", color: "var(--text-muted)", marginBottom: "3rem", lineHeight: 1.6 }}>
          Finish It turns your unfinished projects into public commitments. When your work is visible, your mindset changes.
        </p>
      </motion.div>

      <motion.div 
        variants={itemVariants}
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "2rem",
          width: "100%",
          maxWidth: "1000px"
        }}
      >
        <motion.div 
          className="glass-panel"
          whileHover={{ y: -10, boxShadow: "0 15px 30px rgba(0,0,0,0.5)" }}
          style={{ padding: "2rem", textAlign: "center" }}
        >
          <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>🪦</div>
          <h3 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>Public Accountability</h3>
          <p style={{ color: "var(--text-muted)", lineHeight: 1.5 }}>Your unfinished work is visible to everyone. No more hiding behind private repos.</p>
        </motion.div>

        <motion.div 
          className="glass-panel"
          whileHover={{ y: -10, boxShadow: "0 15px 30px rgba(0,0,0,0.5)" }}
          style={{ padding: "2rem", textAlign: "center" }}
        >
          <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>🔥</div>
          <h3 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>Social Pressure</h3>
          <p style={{ color: "var(--text-muted)", lineHeight: 1.5 }}>When people expect updates, you find a way to stay consistent and deliver.</p>
        </motion.div>

        <motion.div 
          className="glass-panel"
          whileHover={{ y: -10, boxShadow: "0 15px 30px rgba(0,0,0,0.5)" }}
          style={{ padding: "2rem", textAlign: "center" }}
        >
          <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>🚀</div>
          <h3 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>Ship Fast</h3>
          <p style={{ color: "var(--text-muted)", lineHeight: 1.5 }}>Shift your focus from absolute perfection to actual completion and deployment.</p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}