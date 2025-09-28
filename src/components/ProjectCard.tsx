import { motion } from "framer-motion";
import type { Project } from "../types";

interface Props {
  project: Project;
  index: number;
}

function ProjectCard({ project, index }: Props) {
  return (
    <motion.div
      className="project-slide"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <div className="project-image">
        <img src={project.image} alt={project.title} />
      </div>
      <div className="project-details">
        <h2>{project.title}</h2>
        <p>{project.description}</p>
        <div className="project-tags">
          {project.tags.map((tag) => (
            <span className="tag" key={tag}>
              {tag}
            </span>
          ))}
        </div>
        <div className="project-links">
          <a
            href={project.deployLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            Acessar
          </a>
          <a
            href={project.repoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            Repositório
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectCard;
