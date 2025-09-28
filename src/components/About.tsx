import { motion } from "framer-motion";

function About() {
  return (
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
            conclusão em Agosto de 2027 e sempre fui apaixonado por tecnologia.
            Com o tempo, percebi que queria transformar esse interesse em
            carreira. Iniciei minha jornada profissional no design e edição de
            imagens em uma agência, onde desenvolvi um olhar analítico e
            harmônico. Antes disso, trabalhei como tatuador, aprimorando minha
            percepção de composição, cores e detalhes. Hoje, aplico essa
            precisão na criação de peças visuais impactantes.
          </p>
          <a
            href="public/doc/BrunoDev[Front End].pdf"
            download="BrunoDev[Front End].pdf"
            className="btn-cv"
          >
            Baixar Curriculo
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
