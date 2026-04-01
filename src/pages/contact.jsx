import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent 🚀");
  };

  return (
    <div style={styles.container}>

      {/* LEFT SIDE */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        style={styles.left}
      >
        <h1 style={{ fontSize: "42px", marginBottom: "10px" }}>
          Let’s Talk 👋
        </h1>

        <p style={{ fontSize: "18px", color: "#ccc" }}>
          Have an idea, feedback, or want to collaborate?  
          We’d love to hear from you.
        </p>

        <div style={styles.infoBox}>
          <p>📧 support@finishit.com</p>
          <p>🌍 Built for developers worldwide</p>
        </div>
      </motion.div>

      {/* RIGHT SIDE FORM */}
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        style={styles.form}
      >
        <h2 style={{ fontSize: "24px" }}>Send a Message</h2>

        <input
          placeholder="Your Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          style={styles.input}
        />

        <input
          placeholder="Email Address"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          style={styles.input}
        />

        <textarea
          placeholder="Your Message"
          rows="4"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          style={styles.textarea}
        />

        <button type="submit" style={styles.button}>
          Send Message 🚀
        </button>
      </motion.form>

    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "100px",
    padding: "60px"
  },

  left: {
    maxWidth: "500px"
  },

  infoBox: {
    marginTop: "25px",
    color: "#aaa",
    lineHeight: "1.8"
  },

  form: {
    display: "flex",
    flexDirection: "column",
    gap: "18px",
    padding: "45px",
    borderRadius: "18px",
    backdropFilter: "blur(12px)",
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.1)",
    width: "400px"
  },

  input: {
    padding: "14px",
    borderRadius: "10px",
    border: "none",
    outline: "none",
    background: "rgba(255,255,255,0.07)",
    color: "white",
    fontSize: "15px"
  },

  textarea: {
    padding: "14px",
    borderRadius: "10px",
    border: "none",
    outline: "none",
    background: "rgba(255,255,255,0.07)",
    color: "white",
    fontSize: "15px"
  },

  button: {
    padding: "14px",
    borderRadius: "10px",
    border: "none",
    background: "#ff4757",
    color: "white",
    fontSize: "16px",
    cursor: "pointer",
    transition: "0.3s"
  }
};