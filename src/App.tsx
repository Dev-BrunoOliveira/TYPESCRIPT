import "./App.css";
import React, { useState } from "react";
import type { Project } from "./types";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Techs from "./components/Techs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const allProjects: Project[] = [
  {
    title: "Site Tesla",
    description:
      "Este projeto é uma recriação fiel e bem executada da icônica landing page da Tesla, servindo como um excelente estudo de caso de design moderno e desenvolvimento front-end. O foco principal é capturar a estética minimalista, a experiência de usuário imersiva e as animações suaves que caracterizam o site oficial da marca.",
    tags: ["HTML", "CSS", "JavaScript"],
    deployLink: "https://tesla-sigma-peach.vercel.app",
    repoLink: "https://github.com/Dev-BrunoOliveira/TESLA",
    image: "/IMG/TESLA.png",
  },
  {
    title: "Guia de Restaurantes",
    description: "Este projeto é um guia de restaurantes pessoal e curado, nascido da paixão do desenvolvedor por gastronomia e por explorar novos lugares em São Paulo. O site funciona como um blog visual, onde eu compartilho minhas experiências e recomendações, oferecendo um roteiro confiável para quem busca novas opções culinárias na cidade.",
    tags: ["HTML", "CSS", "JavaScript"],
    deployLink: "https://restaurantes-two.vercel.app/",
    repoLink: "https://github.com/Dev-BrunoOliveira/RESTAURANTES",
    image: "/IMG/RESTAURANTES.jpg",
  },
{
    title: "Concurso TJ",
    description:
      "Com o objetivo de democratizar o acesso a materiais de estudo para concursos, identifiquei que a maioria das plataformas preparatórias para Escrevente do TJ-SP exigia um investimento financeiro. Em resposta a essa lacuna, desenvolvi um quiz interativo e totalmente gratuito, projetado para auxiliar os candidatos a testarem e aprofundarem seus conhecimentos de forma eficaz para o exame.",
    tags: ["HTML", "CSS", "JavaScript"],
    deployLink: "https://concurso-nine.vercel.app/",
    repoLink: "https://github.com/Dev-BrunoOliveira/CONCURSO",
    image: "/IMG/Concurso.png",
  },
  {
    title: "Dinaflix",
    description: "Este projeto é uma recriação de front-end da interface de usuário da Netflix, batizada de Dinaflix devido direitos autorais. O objetivo é replicar com fidelidade o design imersivo, o layout característico e as micro-interações que tornam a experiência da plataforma de streaming tão reconhecível e intuitiva.",
    tags: ["HTML", "CSS", "JavaScript"],
    deployLink: "https://dinaflix.vercel.app/",
    repoLink: "https://github.com/Dev-BrunoOliveira/NETFLIX",
    image: "/IMG/NETFLIX.png",
  },
    {
    title: "Pizzaria Donatello",
    description: "Este projeto é uma landing page vibrante e funcional para uma pizzaria fictícia chamada Donatello, focada em criar uma experiência de usuário convidativa e direta. Ele serve como um ótimo exemplo de uma interface comercial, demonstrando como apresentar produtos, serviços e informações de contato de forma eficaz em uma única página.",
    tags: ["React", "Vite", "JavaScript", "CSS"],
    deployLink: "https://pizzaria-six-gray.vercel.app/",
    repoLink: "https://github.com/Dev-BrunoOliveira/PIZZARIA",
    image: "/IMG/PIZZARIA.png",
  },
  {
    title: "Fila de Editores",
    description:
      "Na antiga empresa na qual eu trabalhava, tinhamos que subir para o sistema MaxSystem todo material que era editado na agencia e tornar visivel para os clientes no Aplicativo. Então para facilitar a rotina criei um Sistema de fila para organizar a ordem de editores que vão upar o material.",
    tags: ["Firebase", "Vite", "JavaScript"],
    deployLink: "https://filamaxsystem.vercel.app/",
    repoLink: "https://github.com/Dev-BrunoOliveira/FILAMAXSYSTEM",
    image: "/IMG/FILA.png",
  },
  
  {
    title: "Comunidade de Receitas",
    description:
      "A ideia é uma rede social aonde você pode colocar suas receitas e compartilhar com outras pessoas.Montei esse projeto com a finalidade de praticar minhas habilidades com JavaScript.",
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

const INITIAL_PROJECTS_VISIBLE = 6;

function App(): React.ReactElement {
  const [visibleProjects, setVisibleProjects] = useState(
    INITIAL_PROJECTS_VISIBLE
  );

  const handleLoadMore = () => {
    setVisibleProjects((prevVisible) => prevVisible + 6);
  };

  const projectsToShow = allProjects.slice(0, visibleProjects);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Projects projects={projectsToShow} />

        {visibleProjects < allProjects.length && (
          <div className="load-more-container">
            <button onClick={handleLoadMore} className="btn-load-more">
              Ver mais projetos
            </button>
          </div>
        )}

        <About />
        <Techs />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
