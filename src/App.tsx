import "./App.css";
import { motion } from "framer-motion";
import React from "react";

interface Project {
  title: string;
  description: string;
  tags: string[];
  deployLink: string;
  repoLink: string;
  image: string;
}

const projects: Project[] = [
  {
    title: "Site Tesla",
    description:
      "Site inspirado na Tesla, focado em design responsivo e moderno.",
    tags: ["HTML", "CSS", "JavaScript"],
    deployLink: "https://tesla-sigma-peach.vercel.app",
    repoLink: "https://github.com/Dev-BrunoOliveira/TESLA",
    image: "/IMG/TESLA.png",
  },
  {
    title: "Pizzaria Donatello",
    description: "Interface responsiva para uma pizzaria, utilizando Frontend.",
    tags: ["React", "Vite", "JavaScript", "CSS"],
    deployLink: "https://pizzaria-six-gray.vercel.app/",
    repoLink: "https://github.com/Dev-BrunoOliveira/PIZZARIA",
    image: "/IMG/PIZZARIA.png",
  },
  {
    title: "Guia de Restaurantes",
    description: "Um breve guia de restaurantes que visitei em São Paulo.",
    tags: ["HTML", "CSS", "JavaScript"],
    deployLink: "https://restaurantes-two.vercel.app/",
    repoLink: "https://github.com/Dev-BrunoOliveira/RESTAURANTES",
    image: "/IMG/GUIA.png",
  },
  {
    title: "Dinaflix",
    description: "Uma página inspirada na Netflix.",
    tags: ["HTML", "CSS", "JavaScript"],
    deployLink: "https://dinaflix.vercel.app/",
    repoLink: "https://github.com/Dev-BrunoOliveira/NETFLIX",
    image: "/IMG/NETFLIX.png",
  },
  {
    title: "Fila de Editores",
    description:
      "Sistema de fila para organizar a ordem de editores, com Frontend e Backend.",
    tags: ["Firebase", "Vite", "JavaScript"],
    deployLink: "https://filamaxsystem.vercel.app/",
    repoLink: "https://github.com/Dev-BrunoOliveira/FILAMAXSYSTEM",
    image: "/IMG/FILA.png",
  },
  {
    title: "Concurso TJ",
    description:
      "Um quiz para se preparar e estudar para o concurso de escrevente do TJ SP.",
    tags: ["HTML", "CSS", "JavaScript"],
    deployLink: "https://concurso-nine.vercel.app/",
    repoLink: "https://github.com/Dev-BrunoOliveira/CONCURSO",
    image: "/IMG/Concurso.png",
  },
  {
    title: "Comunidade de Receitas",
    description:
      "A ideia é uma rede social aonde você pode colocar suas receitas e compartilhar com outras pessoas.",
    tags: ["HTML", "CSS", "JavaScript"],
    deployLink: "https://mandareceita.vercel.app/",
    repoLink: "https://github.com/Dev-BrunoOliveira/MANDARECEITA",
    image: "/IMG/MANDARECEITAS.png",
  },
  {
    title: "Loja de Camisetas",
    description:
      "Ainda estou estruturando essa loja online, conforme vou aprendendo ferramentas novas.",
    tags: ["HTML", "CSS", "JavaScript"],
    deployLink: "https://laranjodina.vercel.app/",
    repoLink: "https://github.com/Dev-BrunoOliveira/LARANJODINA",
    image: "/IMG/LARANJODINA.png",
  },
  {
    title: "Hunter x Hunter",
    description: "Cards com Informações sobres os personagens de HxH.",
    tags: ["HTML", "CSS", "JavaScript"],
    deployLink: "https://hunter-nine.vercel.app/",
    repoLink: "https://github.com/Dev-BrunoOliveira/HUNTER",
    image: "/IMG/hunter.png",
  },
  {
    title: "Jogo da Cobrinha",
    description:
      "Testando as minhas habilidades, focada no Javascript, desenvolvi um jogo da cobrinha",
    tags: ["HTML", "Canva", "CSS", "JavaScript"],
    deployLink: "https://snake-game-eta-weld.vercel.app/",
    repoLink: "https://github.com/Dev-BrunoOliveira/SNAKE-GAME",
    image: "/IMG/SNAKE GAME.png",
  },
  {
    title: "Agendamento Barbearia",
    description:
      "A ideia é uma plataforma para barbearias assim podendo ter controle dos clientes agendados e automatização do atendimento indireto.",
    tags: ["HTML", "CSS", "JavaScript"],
    deployLink: "https://barbearia-vert-delta.vercel.app/",
    repoLink: "https://github.com/Dev-BrunoOliveira/BARBEARIA",
    image: "/IMG/BARBEARIA.png",
  },
  {
    title: "Calculadora de Notas",
    description:
      "Desenvolvi com a finalidade de calcular as notas das atividas da minha faculdade, facilitando entender se estou Aprovado ou Reprovado.",
    tags: ["HTML", "CSS", "JavaScript"],
    deployLink: "https://calculadora-de-notas-jade.vercel.app/",
    repoLink: "https://github.com/Dev-BrunoOliveira/CALCULADORA-DE-NOTAS",
    image: "/IMG/CALCULADORADENOTAS.png",
  },
];

const techs = [
  { name: "HTML", imgSrc: "/IMG/techs/html.png" },
  { name: "CSS", imgSrc: "/IMG/techs/css-3.png" },
  { name: "JavaScript", imgSrc: "/IMG/techs/java-script.png" },
  { name: "TypeScript", imgSrc: "/IMG/techs/typescript.png" },
  { name: "React", imgSrc: "/IMG/techs/react.png" },
  { name: "Vite", imgSrc: "/IMG/techs/vite.png" },
  { name: "Firebase", imgSrc: "/IMG/techs/firebase.png" },
  { name: "Python", imgSrc: "/IMG/techs/python.png" },
];

function App(): React.ReactElement {
  return (
    <>
      {}
      <header className="navbar">
        <nav>
          <ul className="nav-list">
            <li>
              <a href="#inicio">Início</a>
            </li>
            <li>
              <a href="#projetos">Projetos</a>
            </li>
            <li>
              <a href="#sobre">Sobre</a>
            </li>
            <li>
              <a href="#contato">Contato</a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Hero*/}
      <section id="inicio" className="hero">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Front-end Bruno Oliveira
        </motion.h1>
      </section>

      {}
      <section id="projetos" className="projects-gallery">
        <h2 className="section-title">Projetos</h2> {}
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
          ))}
        </div>
      </section>

      {/* About*/}
      <section id="sobre" className="about-section">
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
            <p>
              Tenho 30 anos e moro em São Paulo, Brasil. Estudo Análise e
              Desenvolvimento de Sistemas na Faculdade FAM com previsão de
              conclusão em Agosto de 2027 e sempre fui apaixonado por
              tecnologia. Com o tempo, percebi que queria transformar esse
              interesse em carreira. Iniciei minha jornada profissional no
              design e edição de imagens em uma agência, onde desenvolvi um
              olhar analítico e harmônico. Antes disso, trabalhei como tatuador,
              aprimorando minha percepção de composição, cores e detalhes. Hoje,
              aplico essa precisão na criação de peças visuais impactantes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* techs*/}
      <section className="techs-section">
        <h2 className="techs-title">Tecnologias</h2>
        <div className="techs-grid">
          {techs.map((tech, idx) => (
            <motion.div
              className="card-techs"
              key={tech.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <img src={tech.imgSrc} alt={`Logo do ${tech.name}`} />
              <span>{tech.name}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/*Contato*/}
      <section id="contato" className="contact-section">
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
            <a
              href="https://wa.me/message/XDBZLY2ZNU27H1"
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn whatsapp"
            >
              <i className="fa-brands fa-whatsapp"></i> WhatsApp
            </a>
            <a
              href="https://github.com/Dev-BrunoOliveira"
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn github"
            >
              <i className="fa-brands fa-github"></i>
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/bruno-oliveira011/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn linkedin"
            >
              <i className="fa-brands fa-linkedin"></i> LinkedIn
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
