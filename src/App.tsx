// src/App.tsx
import "./App.css";
import { motion } from "framer-motion"; // <--- adicione isso

// Array de projetos
const projects = [
  {
    title: "Projeto 1",
    tags: ["React", "TypeScript"],
    deployLink: "https://exemplo.com/projeto1",
    image: "/IMG/projeto1.jpg",
  },
  {
    title: "Projeto 2",
    tags: ["JavaScript", "CSS"],
    deployLink: "https://exemplo.com/projeto2",
    image: "/IMG/projeto2.jpg",
  },
  // Adicione mais projetos conforme necessário
];

function App() {
  return (
    <>
      {/* Hero */}
      <section className="hero">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Front-end Bruno Oliveira
        </motion.h1>
      </section>

      {/* Projetos */}
      <section className="projects-gallery">
        <div className="projects-container">
          {projects.map((project, idx) => (
            <motion.div
              className="project-slide"
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <div className="slide-content">
                <div className="project-details">
                  <h2>{project.title}</h2>
                  <div className="project-tags">
                    {project.tags.map((tag) => (
                      <span className="tag" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.deployLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-project"
                  >
                    Ver Projeto
                  </a>
                </div>
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* About */}
      <section className="about-section">
        <div className="about-content">
          <motion.div
            className="about-photo"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img src="/IMG/20br.jpg" alt="Bruno Oliveira" />
          </motion.div>
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2>Sobre</h2>
            <p>… seu texto …</p>
          </motion.div>
        </div>
      </section>

      {/* Contact */}
      <section className="contact-section">
        <motion.div
          className="contact-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2>Contato</h2>
          <p>Me mande um e-mail: brunooliver2015@outlook.com</p>
          <div className="social-links">
            <a href="https://github.com/Dev-BrunoOliveira" target="_blank">
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/bruno-oliveira011/"
              target="_blank"
            >
              LinkedIn
            </a>
          </div>
        </motion.div>
      </section>

      <footer className="curriculo">
        <p>© {new Date().getFullYear()} Bruno Oliveira</p>
      </footer>
    </>
  );
}

export default App;
