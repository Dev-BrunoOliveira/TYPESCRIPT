import { createContext, useContext, useState, type ReactNode } from "react";

type Language = "pt" | "en";

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => any;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

const translations: Record<Language, any> = {
  pt: {
    header: {
      home: "Início",
      projects: "Projetos",
      about: "Sobre",
      contact: "Contato",
    },
    hero: {
      title: "FullStack Bruno Oliveira",
      description:
        "Desenvolvo interfaces que unem lógica de back-end com sensibilidade visual de quem veio do design.",
      viewProjects: "Ver projetos",
    },
    about: {
      title: "Sobre",
      p1: "Tenho 30 anos e resido em São Paulo, Brasil. Sou estudante de Análise e Desenvolvimento de Sistemas na Faculdade FAM, com previsão de conclusão em agosto de 2027.",
      p2: "Minha trajetória com tecnologia sempre foi movida pela curiosidade e pela criação. Iniciei minha carreira no design gráfico e edição de imagens, atuando em agência, onde desenvolvi a capacidade de unir estética, usabilidade e lógica.",
      p3: "Antes disso, trabalhei por sete anos como tatuador, experiência que refinou meu senso de composição visual, cores, precisão e atenção aos detalhes.",
      p4: "Hoje, aplico esse olhar criativo no desenvolvimento front-end, criando interfaces modernas, responsivas e focadas em experiência do usuário, utilizando tecnologias como React, TypeScript, Tailwind CSS e Vite.",
      p5: "Paralelamente, venho expandindo meus conhecimentos em back-end, com foco em integrações, bancos de dados e lógica de negócio, buscando construir soluções mais completas e funcionais.",
      p6: "Meu objetivo é atuar em projetos onde design e tecnologia caminham juntos, transformando ideias em experiências digitais eficientes e intuitivas.",
      downloadCv: "Baixar Currículo",
    },
    projects: {
      title: "Projetos",
      loadMore: "Ver mais projetos",
      access: "Acessar",
      repo: "Repositório",
      data: [
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
          title: "Laranjolingo",
          description:
            "Uma forma divertida de aprender inglês com exercícios interativos, gamificação e conteúdo personalizado.Me inspirei bastante no duolingo, mas com uma abordagem mais lúdica e voltada para a experiência do usuário.",
          tags: ["React", "TypeScript", "CSS" , "Supabase", "Gemini API"],
          deployLink: "https://laranjolingo.vercel.app/",
          repoLink: "https://github.com/Dev-BrunoOliveira/ENGLISH",
          image: "/IMG/Laranjolingo.webp",
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
          title: "Dinaflix",
          description:
            "Clone da interface da Netflix com foco em fidelidade visual, layout de streaming e micro-interações. Estudo prático de UI complexa e experiência imersiva.",
          tags: ["React", "TypeScript", "Vite", "CSS"],
          deployLink: "https://dinaflixpremium.vercel.app/",
          repoLink: "https://github.com/Dev-BrunoOliveira/DINAFLIXPREMIUM",
          image: "/IMG/Dinaflix.webp",
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
            "Jogos clássicos desenvolvidos para praticar JavaScript puro, resgatando a estética e jogabilidade dos títulos icônicos dos anos 80 e 90.",
          tags: ["HTML", "CSS", "JavaScript", "Canvas"],
          deployLink: "https://snake-game-eta-weld.vercel.app/",
          repoLink: "https://github.com/Dev-BrunoOliveira/SNAKE-GAME",
          image: "/IMG/retrogames.webp",
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
      ],
    },
    techs: {
      title: "Minhas Principais Stacks",
      pillars: [
        {
          icon: "🖥️",
          title: "Full Stack",
          description:
            "Do front ao back, construindo aplicações completas com React, TypeScript e FastAPI.",
        },
        {
          icon: "🎨",
          title: "UI / UX",
          description:
            "Background em design e tatuagem que molda cada detalhe de interface e experiência.",
        },
        {
          icon: "🤖",
          title: "IA & Automação",
          description:
            "Fluxos inteligentes com n8n, integração com LLMs e automação de processos reais.",
        },
        {
          icon: "🗄️",
          title: "Banco de Dados",
          description:
            "Modelagem e integração com Supabase, PostgreSQL, MySQL e Firebase.",
        },
      ],
      categories: {
        frontend: "Frontend",
        backend: "Backend",
        database: "Banco de Dados",
        cloud: "Cloud & DevOps",
        ai: "Automação & IA",
      },
    },
    contact: {
      title: "Contato",
      successTitle: "E-mail enviado com sucesso!",
      successMsg: "Obrigado, entraremos em contato em breve.",
      sendAnother: "Enviar outra mensagem",
      formMsg: "Mande sua mensagem abaixo:",
      namePlaceholder: "Seu Nome",
      emailPlaceholder: "Seu E-mail",
      messagePlaceholder: "Como posso te ajudar?",
      sending: "Enviando...",
      sendBtn: "Enviar Mensagem",
    },
    footer: {
      rights: "Direitos reservados ao desenvolvedor Bruno Oliveira",
    },
  },
  en: {
    header: {
      home: "Home",
      projects: "Projects",
      about: "About",
      contact: "Contact",
    },
    hero: {
      title: "FullStack Bruno Oliveira",
      description:
        "I develop interfaces that combine back-end logic with the visual sensibility of a former designer.",
      viewProjects: "View projects",
    },
    about: {
      title: "About",
      p1: "I am 30 years old and live in São Paulo, Brazil. I am currently studying Systems Analysis and Development at FAM University, expected to graduate in August 2027.",
      p2: "My journey with technology has always been driven by curiosity and creation. I started my career in graphic design and image editing at an agency, where I developed the ability to unite aesthetics, usability, and logic.",
      p3: "Prior to that, I worked as a tattoo artist for seven years, an experience that refined my sense of visual composition, colors, precision, and attention to detail.",
      p4: "Today, I apply this creative perspective to front-end development, building modern, responsive interfaces focused on user experience using technologies like React, TypeScript, Tailwind CSS, and Vite.",
      p5: "At the same time, I've been expanding my back-end knowledge, focusing on integrations, databases, and business logic, aiming to build more complete and functional solutions.",
      p6: "My goal is to work on projects where design and technology go hand in hand, turning ideas into efficient and intuitive digital experiences.",
      downloadCv: "Download Resume",
    },
    projects: {
      title: "Projects",
      loadMore: "See more projects",
      access: "Access",
      repo: "Repository",
      data: [
        {
          title: "Life Insurance",
          description:
            "Landing page for a life insurance company with a focus on conversion. Clean design with benefit sections, testimonials, and contact form. Developed with React and TypeScript.",
          tags: ["React", "CSS", "TypeScript"],
          deployLink: "https://corretora-zeta.vercel.app/",
          repoLink: "https://github.com/Dev-BrunoOliveira/CORRETORA",
          image: "/IMG/Seguradora.webp",
        },
        {
          title: "Financial Control",
          description:
            "Personal finance app for tracking income and expenses, featuring Google authentication and Supabase storage. Developed with React, TypeScript and Gemini API.",
          tags: ["React", "TypeScript", "CSS", "Supabase", "Gemini API"],
          deployLink: "https://carteira-self.vercel.app/",
          repoLink: "https://github.com/Dev-BrunoOliveira/CARTEIRA",
          image: "/IMG/Carteira.webp",
        },
        {
          title: "T-Shirt Store",
          description:
            "Custom print t-shirt e-commerce, user authentication and MySQL database. Project focused on API consumption and fluid purchasing flow.",
          tags: ["React", "TypeScript", "MySQL", "CSS"],
          deployLink: "https://laranjodina.vercel.app/",
          repoLink: "https://github.com/Dev-BrunoOliveira/STORE",
          image: "/IMG/Loja.webp",
        },
        {
          title: "Laranjolingo",
          description:
            "A fun way to learn English featuring interactive exercises, gamification, and personalized content. Heavily inspired by Duolingo, it offers a more playful approach tailored to the user experience.",
          tags: ["React", "TypeScript", "CSS" , "Supabase", "Gemini API"],
          deployLink: "https://laranjolingo.vercel.app/",
          repoLink: "https://github.com/Dev-BrunoOliveira/ENGLISH",
          image: "/IMG/Laranjolingo.webp",
        },
        {
          title: "Restaurant Guide",
          description:
            "Visual blog with personal curation of restaurants in São Paulo. Interface focused on reading experience, with recommendations and gastronomic itineraries.",
          tags: ["HTML", "CSS", "React", "TypeScript"],
          deployLink: "https://guia-pi.vercel.app/",
          repoLink: "https://github.com/Dev-BrunoOliveira/GUIA",
          image: "/IMG/Guia.webp",
        },
        {
          title: "Court Contest",
          description:
            "Interactive and free quiz for candidates to the SP Court Clerk position. Developed as an accessible alternative to paid platforms in the market.",
          tags: ["HTML", "CSS", "JavaScript"],
          deployLink: "https://concurso-nine.vercel.app/",
          repoLink: "https://github.com/Dev-BrunoOliveira/CONCURSO",
          image: "/IMG/Concurso.webp",
        },
        {
          title: "Dinaflix",
          description:
            "Netflix interface clone focusing on visual fidelity, streaming layout and micro-interactions. Practical study of complex UI and immersive experience.",
          tags: ["React", "TypeScript", "Vite", "CSS"],
          deployLink: "https://dinaflixpremium.vercel.app/",
          repoLink: "https://github.com/Dev-BrunoOliveira/DINAFLIXPREMIUM",
          image: "/IMG/Dinaflix.webp",
        },
        {
          title: "Artistic Showcase",
          description:
            "Digital gallery for artists to display illustrations and expand reach beyond local audience. Concept aimed at turning followers into potential buyers.",
          tags: ["React", "CSS", "TypeScript"],
          deployLink: "https://galeria-sigma-ten.vercel.app/",
          repoLink: "https://github.com/Dev-BrunoOliveira/GALERIA",
          image: "/IMG/Galeria.webp",
        },
        {
          title: "Tesla Site",
          description:
            "Recreation of Tesla's landing page as a study in minimalist design and front-end. Focus on immersive UX and smooth animations faithful to the brand's aesthetic.",
          tags: ["HTML", "CSS", "JavaScript"],
          deployLink: "https://tesla-sigma-peach.vercel.app",
          repoLink: "https://github.com/Dev-BrunoOliveira/TESLA",
          image: "/IMG/Tesla.webp",
        },
        {
          title: "Donatello Pizzeria",
          description:
            "Commercial landing page for a fictional pizzeria presenting products, services and contact info in a single page. Inviting interface focused on conversion.",
          tags: ["React", "Vite", "JavaScript", "CSS"],
          deployLink: "https://pizzaria-six-gray.vercel.app/",
          repoLink: "https://github.com/Dev-BrunoOliveira/PIZZARIA",
          image: "/IMG/Pizzaria.webp",
        },
        {
          title: "Retro Games",
          description:
            "Classic game developed to practice pure JavaScript, rescuing the aesthetic and gameplay of iconic titles from the 80s and 90s.",
          tags: ["HTML", "CSS", "JavaScript", "Canvas"],
          deployLink: "https://snake-game-eta-weld.vercel.app/",
          repoLink: "https://github.com/Dev-BrunoOliveira/SNAKE-GAME",
          image: "/IMG/retrogames.png",
        },
        {
          title: "Grade Calculator",
          description:
            "Calculator developed to compute college activity grades and indicate pass or fail status. Shared to help other students in the same curriculum.",
          tags: ["HTML", "CSS", "JavaScript"],
          deployLink: "https://calculadora-de-notas-jade.vercel.app/",
          repoLink: "https://github.com/Dev-BrunoOliveira/CALCULADORA-DE-NOTAS",
          image: "/IMG/CALCULADORADENOTAS.png",
        },
      ],
    },
    techs: {
      title: "My Main Stacks",
      pillars: [
        {
          icon: "🖥️",
          title: "Full Stack",
          description:
            "From front to back, building complete applications with React, TypeScript and FastAPI.",
        },
        {
          icon: "🎨",
          title: "UI / UX",
          description:
            "Background in design and tattooing that shapes every detail of the interface and experience.",
        },
        {
          icon: "🤖",
          title: "AI & Automation",
          description:
            "Smart flows with n8n, LLM integration and automation of real processes.",
        },
        {
          icon: "🗄️",
          title: "Database",
          description:
            "Modeling and integration with Supabase, PostgreSQL, MySQL and Firebase.",
        },
      ],
      categories: {
        frontend: "Frontend",
        backend: "Backend",
        database: "Database",
        cloud: "Cloud & DevOps",
        ai: "Automation & AI",
      },
    },
    contact: {
      title: "Contact",
      successTitle: "Email sent successfully!",
      successMsg: "Thank you, we'll get back to you shortly.",
      sendAnother: "Send another message",
      formMsg: "Send your message below:",
      namePlaceholder: "Your Name",
      emailPlaceholder: "Your Email",
      messagePlaceholder: "How can I help you?",
      sending: "Sending...",
      sendBtn: "Send Message",
    },
    footer: {
      rights: "All rights reserved to the developer Bruno Oliveira",
    },
  },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("pt");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "pt" ? "en" : "pt"));
  };

  const t = (key: string) => {
    const keys = key.split(".");
    let value = translations[language];
    for (const k of keys) {
      if (value[k] === undefined) return key;
      value = value[k];
    }
    return value;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
