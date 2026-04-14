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
    <motion.div 
      className="page-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      style={{ flexDirection: "row", flexWrap: "wrap", gap: "4rem", justifyContent: "center", alignItems: "center" }}
    >
      {/* LEFT SIDE */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        style={{ maxWidth: "500px" }}
      >
        <h1 className="gradient-text" style={{ fontSize: "3.5rem", marginBottom: "1rem" }}>
          Let’s Talk 👋
        </h1>

        <p style={{ fontSize: "1.2rem", color: "var(--text-muted)", lineHeight: 1.6 }}>
          Have an idea, feedback, or want to showcase a project you finally finished?  
          We’d love to hear from you.
        </p>

        <div style={{ marginTop: "2rem", color: "var(--text-muted)", lineHeight: "2" }}>
          <p style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>📧 <span style={{ color: 'var(--text-main)' }}>support@finishit.com</span></p>
          <p style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>🌍 <span style={{ color: 'var(--text-main)' }}>Built for developers worldwide</span></p>
        </div>
      </motion.div>

      {/* RIGHT SIDE FORM */}
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4 }}
        className="glass-panel"
        style={{ display: "flex", flexDirection: "column", gap: "1.5rem", padding: "2.5rem", width: "100%", maxWidth: "450px" }}
      >
        <h2 style={{ fontSize: "1.8rem", marginBottom: "0.5rem" }}>Send a Message</h2>

        <input
          placeholder="Your Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="glass-input"
          required
        />

        <input
          type="email"
          placeholder="Email Address"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="glass-input"
          required
        />

        <textarea
          placeholder="Your Message"
          rows="4"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="glass-input"
          style={{ resize: "vertical" }}
          required
        />

        <motion.button 
          type="submit" 
          className="btn-primary"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Send Message 🚀
        </motion.button>
      </motion.form>

    </motion.div>
  );
}