import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

export default function Navbar() {
  const location = useLocation();

  const links = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/shelf", label: "The Shelf" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <nav className="glass-nav">
      <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
        <motion.h2 
          className="gradient-text"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{ margin: 0, fontSize: "1.5rem" }}
        >
          🚀 Finish It
        </motion.h2>
      </Link>
      
      <div style={{ display: 'flex', gap: '2rem' }}>
        {links.map((link) => {
          const isActive = location.pathname === link.path;
          return (
            <Link 
              key={link.path}
              to={link.path} 
              style={{ 
                textDecoration: "none", 
                color: isActive ? "var(--text-main)" : "var(--text-muted)",
                fontWeight: isActive ? 600 : 400,
                transition: "color 0.3s ease",
                position: "relative"
              }}
            >
              {link.label}
              {isActive && (
                <motion.div
                  layoutId="underline"
                  style={{
                    position: "absolute",
                    bottom: "-4px",
                    left: 0,
                    right: 0,
                    height: "2px",
                    background: "var(--accent)",
                    borderRadius: "2px"
                  }}
                />
              )}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}