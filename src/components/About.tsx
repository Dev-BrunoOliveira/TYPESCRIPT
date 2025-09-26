import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const techs = [
  { name: "HTML", imgSrc: "/IMG/techs/html.png" },
  { name: "CSS", imgSrc: "/IMG/techs/css-3.png" },
  { name: "JavaScript", imgSrc: "/IMG/techs/java-script.png" },
  { name: "TypeScript", imgSrc: "/IMG/techs/typescript.png" },
  { name: "Github", imgSrc: "/IMG/techs/github.png" },
  { name: "React", imgSrc: "/IMG/techs/react.png" },
  { name: "Python", imgSrc: "/IMG/techs/python.png" },
  { name: "Firebase", imgSrc: "/IMG/techs/firebase.png" },
  { name: "Vite", imgSrc: "/IMG/techs/vite.png" },
];

export const About = () => {
  const component = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-content, .techs-grid", {
        opacity: 0,
        y: 50,
        stagger: 0.2,
        scrollTrigger: {
          trigger: component.current,
          start: "top 80%",
          end: "top 50%",
          scrub: 1,
        },
      });
    }, component);
    return () => ctx.revert();
  }, []);

  return (
    <section className="section about-section" ref={component}>
      <div className="about-content">
        <div className="about-text">
          <h2>Sobre Mim</h2>
          <p>Olá, sou Bruno Oliveira...</p>
          <p>
            Tenho 30 anos e moro em São Paulo, Brasil. Estudo Análise e
            Desenvolvimento de Sistemas na Faculdade FAM com previsão de
            conclusão em Agosto de 2027 e sempre fui apaixonado por tecnologia.
            Com o tempo, percebi que queria transformar esse interesse em
            carreira. Iniciei minha jornada profissional no design e edição de
            imagens em uma agência, onde desenvolvi um olhar analítico e
            harmônico. Antes disso, trabalhei como tatuador, aprimorando minha
            percepção de composição, cores e detalhes. Hoje, aplico essa
            precisão na criação de peças visuais impactantes.
          </p>
        </div>
        <div className="about-photo">
          <img src="/IMG/20br.jpg" alt="Foto de Bruno Oliveira" />
        </div>
      </div>
      <div className="techs-grid">
        {techs.map((tech) => (
          <div className="card-techs" key={tech.name}>
            <img src={tech.imgSrc} alt={`Logo do ${tech.name}`} />
            <span>{tech.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};
