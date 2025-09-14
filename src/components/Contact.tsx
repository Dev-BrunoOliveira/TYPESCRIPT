// src/components/Contact.tsx
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Github, Linkedin, Mail, Download } from "lucide-react"; // Ícones modernos

gsap.registerPlugin(ScrollTrigger);

export const Contact = () => {
  const component = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(component.current, {
        opacity: 0,
        y: 50,
        scrollTrigger: {
          trigger: component.current,
          start: "top 85%",
          end: "top 60%",
          scrub: 1,
        },
      });
    }, component);
    return () => ctx.revert();
  }, []);

  return (
    <section className="section contact-section" ref={component}>
      <div className="contact-content">
        <h2>Contato</h2>
        <p>Vamos construir o futuro juntos? Entre em contato comigo.</p>
        <div className="social-links">
          <a
            href="mailto:brunooliver2015@outlook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Mail />
            <span>brunooliver2015@outlook.com</span>
          </a>
          <a
            href="https://www.linkedin.com/in/bruno-oliveira-90a623275/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin />
            <span>LinkedIn</span>
          </a>
          <a
            href="https://github.com/Dev-BrunoOliveira"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github />
            <span>Github</span>
          </a>
        </div>
      </div>

      <div className="curriculo">
        <h3>Meu Currículo</h3>
        <p>Darei o meu melhor para agregar na sua empresa.</p>
        <a href="/doc/BrunoDev[Front End].pdf" download className="btn">
          <Download size={20} />
          Baixar Currículo
        </a>
      </div>
    </section>
  );
};
