import ProjectCard from './ProjectCard';
import type { Project } from '../types';
import { useLanguage } from '../contexts/LanguageContext';

interface Props {
  projects: Project[];
}

function Projects({ projects }: Props) {
  const { t } = useLanguage();

  return (
    <section id="projetos" className="projects-gallery">
      <h2 className="section-title">{t("projects.title")}</h2>
      <div className="projects-container">
        {projects.map((project, idx) => (
          <ProjectCard key={project.title} project={project} index={idx} />
        ))}
      </div>
    </section>
  );
}

export default Projects;