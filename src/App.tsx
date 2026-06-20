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
    title: "Seguradora de Vida",
    description:
      "Landing page para seguradora de vida com foco em conversão. Design sóbrio com seções de benefícios, depoimentos e formulário de contato. Desenvolvida com React e TypeScript.",
    tags: ["React", "CSS", "TypeScript"],
    deployLink: "https://corretora-zeta.vercel.app/",
    repoLink: "https://github.com/Dev-BrunoOliveira/CORRETORA",
    image: "/IMG/Seguradora.webp",
  },
  {
    title: "Controle Financeiro",
    description:
      "App de finanças pessoais com registro de ganhos e gastos, autenticação via Google e armazenamento no Supabase. Desenvolvido com React, TypeScript e Gemini API.",
    tags: ["React", "TypeScript", "CSS", "Supabase", "Gemini API"],
    deployLink: "https://carteira-self.vercel.app/",
    repoLink: "https://github.com/Dev-BrunoOliveira/CARTEIRA",
    image: "/IMG/Carteira.webp",
  },
  {
    title: "Loja de Camisetas",
    description:
      "E-commerce de camisetas com estampas personalizadas, autenticação de usuários e banco de dados MySQL. Projeto focado em consumo de API e fluxo de compra fluido.",
    tags: ["React", "TypeScript", "MySQL", "CSS"],
    deployLink: "https://laranjodina.vercel.app/",
    repoLink: "https://github.com/Dev-BrunoOliveira/STORE",
    image: "/IMG/Loja.webp",
  },
  {
    title: "Guia de Restaurantes",
    description:
      "Blog visual com curadoria pessoal de restaurantes em São Paulo. Interface focada em experiência de leitura, com recomendações e roteiros gastronômicos pela cidade.",
    tags: ["HTML", "CSS", "React", "TypeScript"],
    deployLink: "https://guia-pi.vercel.app/",
    repoLink: "https://github.com/Dev-BrunoOliveira/GUIA",
    image: "/IMG/Guia.webp",
  },
  {
    title: "Concurso TJ",
    description:
      "Quiz interativo e gratuito para candidatos ao cargo de Escrevente do TJ-SP. Desenvolvido como alternativa acessível às plataformas pagas do mercado.",
    tags: ["HTML", "CSS", "JavaScript"],
    deployLink: "https://concurso-nine.vercel.app/",
    repoLink: "https://github.com/Dev-BrunoOliveira/CONCURSO",
    image: "/IMG/Concurso.webp",
  },
  {
    title: "Vitrine Artística",
    description:
      "Galeria digital para artistas exibirem ilustrações e expandirem alcance além do público local. Conceito voltado para transformar seguidores em potenciais compradores.",
    tags: ["React", "CSS", "TypeScript"],
    deployLink: "https://galeria-sigma-ten.vercel.app/",
    repoLink: "https://github.com/Dev-BrunoOliveira/GALERIA",
    image: "/IMG/Galeria.webp",
  },
  {
    title: "Site Tesla",
    description:
      "Recriação da landing page da Tesla como estudo de design minimalista e front-end. Foco em UX imersiva e animações suaves fiéis à estética da marca.",
    tags: ["HTML", "CSS", "JavaScript"],
    deployLink: "https://tesla-sigma-peach.vercel.app",
    repoLink: "https://github.com/Dev-BrunoOliveira/TESLA",
    image: "/IMG/Tesla.webp",
  },
  {
    title: "Dinaflix",
    description:
      "Clone da interface da Netflix com foco em fidelidade visual, layout de streaming e micro-interações. Estudo prático de UI complexa e experiência imersiva.",
    tags: ["HTML", "CSS", "JavaScript"],
    deployLink: "https://dinaflix.vercel.app/",
    repoLink: "https://github.com/Dev-BrunoOliveira/NETFLIX",
    image: "/IMG/Netflix.webp",
  },
  {
    title: "Pizzaria Donatello",
    description:
      "Landing page comercial para pizzaria fictícia com apresentação de produtos, serviços e contato em página única. Interface convidativa focada em conversão.",
    tags: ["React", "Vite", "JavaScript", "CSS"],
    deployLink: "https://pizzaria-six-gray.vercel.app/",
    repoLink: "https://github.com/Dev-BrunoOliveira/PIZZARIA",
    image: "/IMG/Pizzaria.webp",
  },
  {
    title: "Retro Games",
    description:
      "Jogo clássico desenvolvido para praticar JavaScript puro, resgatando a estética e jogabilidade dos títulos icônicos dos anos 80 e 90.",
    tags: ["HTML", "CSS", "JavaScript", "Canvas"],
    deployLink: "https://snake-game-eta-weld.vercel.app/",
    repoLink: "https://github.com/Dev-BrunoOliveira/SNAKE-GAME",
    image: "/IMG/retrogames.png",
  },
  {
    title: "Calculadora de Notas",
    description:
      "Calculadora desenvolvida para apurar notas das atividades da faculdade e indicar aprovação ou reprovação. Compartilhada para ajudar outros estudantes da mesma grade.",
    tags: ["HTML", "CSS", "JavaScript"],
    deployLink: "https://calculadora-de-notas-jade.vercel.app/",
    repoLink: "https://github.com/Dev-BrunoOliveira/CALCULADORA-DE-NOTAS",
    image: "/IMG/CALCULADORADENOTAS.png",
  },
];

const INITIAL_PROJECTS_VISIBLE = 6;

function App(): React.ReactElement {
  const [visibleProjects, setVisibleProjects] = useState(
    INITIAL_PROJECTS_VISIBLE,
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
