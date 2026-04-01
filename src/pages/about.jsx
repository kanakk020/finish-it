import { motion } from "framer-motion";

export default function About() {
  return (
    <div style={styles.container}>
      <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        Why Finish It Exists 🪦
      </motion.h1>

      <p style={styles.text}>
        Every developer starts projects with excitement.
        But most of them never get finished.
        Not because of lack of skill — but lack of consistency.
      </p>

      <p style={styles.text}>
        Finish It turns your unfinished projects into public commitments.
        When your work is visible, your mindset changes.
      </p>

      <div style={styles.grid}>
        <div style={styles.card}>
          <h3>🪦 Public Accountability</h3>
          <p>Your unfinished work is visible. No hiding.</p>
        </div>

        <div style={styles.card}>
          <h3>🔥 Social Pressure</h3>
          <p>People expect updates — you stay consistent.</p>
        </div>

        <div style={styles.card}>
          <h3>🚀 Ship Fast</h3>
          <p>Focus on completion, not perfection.</p>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: "60px",
    textAlign: "center"
  },
  text: {
    maxWidth: "700px",
    margin: "20px auto",
    color: "#ccc"
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
    marginTop: "40px"
  },
  card: {
    padding: "25px",
    borderRadius: "15px",
    backdropFilter: "blur(10px)",
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.1)"
  }
};