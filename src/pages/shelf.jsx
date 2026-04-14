import { motion } from "framer-motion";

const projects = [
  { id: 1, title: "Crypto Tracker", reason: "Lost interest during bear market", status: "Shelved", date: "Oct 2022" },
  { id: 2, title: "SaaS Boilerplate", reason: "Too many boilerplates exist", status: "Shelved", date: "Jan 2023" },
  { id: 3, title: "AI Code Reviewer", reason: "API costs got too high", status: "In Progress", date: "Mar 2024" },
  { id: 4, title: "Habit App", reason: "Forgot to use my own habit app", status: "Shelved", date: "Jul 2023" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  },
  exit: { opacity: 0, scale: 0.95, transition: { duration: 0.2 } }
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
};

export default function Shelf() {
  return (
    <motion.div 
      className="page-container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <motion.h1 
          className="gradient-text" 
          style={{ fontSize: '3rem', marginBottom: '1rem' }}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          The Shelf 📚
        </motion.h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
          A resting place for projects collecting dust. Don't hide them—acknowledge them, learn from them, or finish them.
        </p>
      </div>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', 
        gap: '2rem',
        width: '100%',
        maxWidth: '1000px'
      }}>
        {projects.map((project) => (
          <motion.div 
            key={project.id} 
            className="glass-panel"
            variants={cardVariants}
            whileHover={{ y: -5, boxShadow: "0 12px 40px 0 rgba(0, 0, 0, 0.45)" }}
            style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <h3 style={{ fontSize: '1.4rem', margin: 0 }}>{project.title}</h3>
              <span style={{ 
                fontSize: '0.8rem', 
                padding: '0.3rem 0.8rem', 
                borderRadius: '20px',
                background: project.status === 'In Progress' ? 'rgba(0, 200, 255, 0.2)' : 'rgba(255, 71, 87, 0.2)',
                color: project.status === 'In Progress' ? '#00c8ff' : '#ff4757',
                fontWeight: 600
              }}>
                {project.status}
              </span>
            </div>
            
            <p style={{ color: 'var(--text-muted)', margin: 0, flexGrow: 1 }}>
              <strong style={{ color: 'var(--text-main)' }}>Reason for stalling:</strong> {project.reason}
            </p>
            
            <div style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.4)', textAlign: 'right' }}>
              Shelved: {project.date}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
