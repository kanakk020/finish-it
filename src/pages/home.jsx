import { motion } from "framer-motion";

export default function Home() {
  return (
    <div style={styles.container}>

      {/* Glow */}
      <div style={styles.glow}></div>

      <motion.h1
        initial={{ opacity: 0, y: -60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Finish What You Started 🚀
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        Stop abandoning projects. Start shipping them.
      </motion.p>

      <motion.div style={styles.buttons}>
        <motion.button whileHover={{ scale: 1.1 }} style={styles.primary}>
          Bury Project 🪦
        </motion.button>

        <motion.button whileHover={{ scale: 1.1 }} style={styles.secondary}>
          Explore Graveyard
        </motion.button>
      </motion.div>

    </div>
  );
}

const styles = {
  container: {
    height: "90vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    position: "relative"
  },
  glow: {
    position: "absolute",
    width: "400px",
    height: "400px",
    background: "radial-gradient(circle, rgba(255,71,87,0.4), transparent)",
    filter: "blur(120px)",
    top: "20%",
    zIndex: -1
  },
  buttons: {
    marginTop: "30px",
    display: "flex",
    gap: "20px"
  },
  primary: {
    padding: "12px 25px",
    background: "#ff4757",
    border: "none",
    color: "white",
    borderRadius: "10px",
    cursor: "pointer"
  },
  secondary: {
    padding: "12px 25px",
    background: "transparent",
    border: "1px solid #fff",
    color: "white",
    borderRadius: "10px",
    cursor: "pointer"
  }
};