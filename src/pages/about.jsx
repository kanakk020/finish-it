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
        style={{ fontSize: "3rem", marginBottom: "2rem", textAlign: "center" }}
      >
        Why Finish It Exists 🚀
      </motion.h1>

      <motion.div variants={itemVariants} style={{ maxWidth: "800px", textAlign: "center", marginBottom: "3rem" }}>
        <p style={{ fontSize: "1.3rem", color: "var(--text-main)", marginBottom: "1.5rem", lineHeight: 1.8, fontWeight: 500 }}>
          Finish It is a platform for developers to confront their unfinished projects and finally ship them.
        </p>
        <p style={{ fontSize: "1.1rem", color: "var(--text-muted)", marginBottom: "1.5rem", lineHeight: 1.8 }}>
          Instead of letting ideas fade away, users publicly archive abandoned projects, share what went wrong, and commit to completing one.
        </p>
        <p style={{ fontSize: "1.1rem", color: "var(--text-muted)", marginBottom: "1.5rem", lineHeight: 1.8 }}>
          With social accountability, visible progress, and community pressure, Finish It turns intention into execution. 
        </p>
        <h3 className="gradient-text" style={{ fontSize: "1.8rem", marginTop: "2rem" }}>
          Because ideas don’t matter — finished products do.
        </h3>
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
          <h3 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>Public Archive</h3>
          <p style={{ color: "var(--text-muted)", lineHeight: 1.5 }}>Publish your unfinished work. Acknowledge what went wrong without hiding.</p>
        </motion.div>

        <motion.div 
          className="glass-panel"
          whileHover={{ y: -10, boxShadow: "0 15px 30px rgba(0,0,0,0.5)" }}
          style={{ padding: "2rem", textAlign: "center" }}
        >
          <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>🔥</div>
          <h3 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>Social Accountability</h3>
          <p style={{ color: "var(--text-muted)", lineHeight: 1.5 }}>Utilize community pressure and visible progress to stay consistent.</p>
        </motion.div>

        <motion.div 
          className="glass-panel"
          whileHover={{ y: -10, boxShadow: "0 15px 30px rgba(0,0,0,0.5)" }}
          style={{ padding: "2rem", textAlign: "center" }}
        >
          <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>🚀</div>
          <h3 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>Ship Fast</h3>
          <p style={{ color: "var(--text-muted)", lineHeight: 1.5 }}>Turn intention into execution. Stop overthinking and start launching.</p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}