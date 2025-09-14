import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Array ATUALIZADO com todos os 13 projetos
const projectData = [
  {
    title: "Site Tesla",
    image: "/IMG/TESLA.png",
    deployLink: "https://tesla-sigma-peach.vercel.app",
    tags: ["HTML", "CSS", "JavaScript"]
  },
  {
    title: "Pizzaria Donatello",
    image: "/IMG/PIZZARIA.png",
    deployLink: "https://pizzaria-six-gray.vercel.app/",
    tags: ["React", "Vite", "CSS"]
  },
  {
    title: "Guia de Restaurantes",
    image: "/IMG/GUIA.png",
    deployLink: "https://restaurantes-two.vercel.app/",
    tags: ["HTML", "CSS", "JavaScript"]
  },
  {
    title: "Dinaflix",
    image: "/IMG/NETFLIX.png",
    deployLink: "https://dinaflix.vercel.app/",
    tags: ["HTML", "CSS", "JavaScript"]
  },
  {
    title: "Fila de Editores",
    image: "/IMG/FILA.png",
    deployLink: "https://filamaxsystem.vercel.app/",
    tags: ["React", "Vite", "Firebase"]
  },
  {
    title: "Concurso TJ",
    image: "/IMG/Concurso.png",
    deployLink: "https://concurso-nine.vercel.app/",
    tags: ["HTML", "CSS", "JavaScript"]
  },
  {
    title: "Comunidade de Receitas",
    image: "/IMG/MANDARECEITAS.png",
    deployLink: "https://mandareceita.vercel.app/",
    tags: ["HTML", "CSS", "JavaScript"]
  },
  {
    title: "Loja de Camisetas",
    image: "/IMG/LARANJODINA.png",
    deployLink: "https://laranjodina.vercel.app/",
    tags: ["HTML", "CSS", "JavaScript"]
  },
  {
    title: "Hunter x Hunter",
    image: "/IMG/hunter.png",
    deployLink: "https://hunter-nine.vercel.app/",
    tags: ["HTML", "CSS", "JavaScript"]
  },
  {
    title: "Calculadora de Notas",
    image: "/IMG/CALCULADORADENOTAS.png",
    deployLink: "https://calculadora-de-notas-jade.vercel.app/",
    tags: ["HTML", "CSS", "JavaScript"]
  },
  {
    title: "Conversor de Dólar e Euro",
    image: "/IMG/Calculadora.png",
    deployLink: "https://conversor-sigma.vercel.app/",
    tags: ["HTML", "CSS", "JavaScript"]
  },
  {
    title: "Agendamento Barbearia",
    image: "/IMG/BARBEARIA.png",
    deployLink: "https://barbearia-vert-delta.vercel.app/",
    tags: ["React", "Vite", "CSS"]
  },
  {
    title: "Jogo da Cobrinha",
    image: "/IMG/SNAKE GAME.png",
    deployLink: "https://snake-game-eta-weld.vercel.app/",
    tags: ["HTML", "CSS", "JavaScript"]
  }
];


export const Projects = () => {
  const component = useRef<HTMLDivElement>(null);
  const slider = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to(slider.current, {
        xPercent: -100 * (projectData.length - 1),
        ease: 'none',
        scrollTrigger: {
          trigger: component.current,
          pin: true,
          scrub: 1.5,
          snap: 1 / (projectData.length - 1),
          end: () => `+=${window.innerHeight * projectData.length * 1}`,
        },
      });
    }, component);
    return () => ctx.revert();
  }, []);

  return (
    <div className="projects-gallery" ref={component}>
      <div className="projects-container" ref={slider}>
        {projectData.map((project, index) => (
          <div className="project-slide" key={index}>
            <div className="slide-content">
              <div className="project-details">
                <h2>{project.title}</h2>
                <div className="project-tags">
                  {project.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
                </div>
                <a href={project.deployLink} className="btn-project" target="_blank" rel="noopener noreferrer">
                  Ver Projeto
                </a>
              </div>
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};