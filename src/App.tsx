// src/App.tsx
import "./App.css";

const projects = [
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
  },
];

function App() {
  return (
    <>
      {/* Hero */}
      <section className="hero">
        <h1>Bruno Oliveira</h1>
      </section>

      {/* Projetos */}
      <section className="projects-gallery">
        <div className="projects-container">
          {projects.map((project, idx) => (
            <div className="project-slide" key={idx}>
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
                  {/* <p>{project.description}</p> */}
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
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section className="about-section">
        <div className="about-content">
          <div className="about-photo">
            <img src="./IMG/20br.jpg" alt="Bruno Oliveira" />
          </div>
          <div className="about-text">
            <h2>About</h2>
            <p>
              Sou desenvolvedor front-end com paixão por design e experiências
              criativas. Este portfólio mostra alguns dos meus projetos mais
              recentes.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="contact-section">
        <div className="contact-content">
          <h2>Contact</h2>
          <p>Me mande um e-mail: bruno@email.com</p>
          <div className="social-links">
            <a href="https://github.com" target="_blank">
              GitHub
            </a>
            <a href="https://linkedin.com" target="_blank">
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      <footer className="curriculo">
        <h3>Hero / Footer</h3>
        <p>© {new Date().getFullYear()} Bruno Oliveira</p>
      </footer>
    </>
  );
}

export default App;
