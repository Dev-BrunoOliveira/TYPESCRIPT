import './App.css';
import React, { useState } from 'react';
import type { Project } from './types'; 

import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Techs from './components/Techs';
import Contact from './components/Contact';
import Footer from './components/Footer'; 

const allProjects: Project[] = [
  
  {
    title: "Site Tesla",
    description: "Site inspirado na Tesla, focado em design responsivo e moderno.",
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

const INITIAL_PROJECTS_VISIBLE = 6;

function App(): React.ReactElement {
  const [visibleProjects, setVisibleProjects] = useState(INITIAL_PROJECTS_VISIBLE);

  const handleLoadMore = () => {
    setVisibleProjects(prevVisible => prevVisible + 6);
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