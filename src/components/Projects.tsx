import ProjectCard from './ProjectCard';
import type { Project } from '../types';

interface Props {
  projects: Project[];
}

function Projects({ projects }: Props) {
  return (
    <section id="projetos" className="projects-gallery">
      <h2 className="section-title">Projetos</h2>
      <div className="projects-container">
        {projects.map((project, idx) => (
          <ProjectCard key={project.title} project={project} index={idx} />
        ))}
      </div>
    </section>
  );
}

export default Projects;