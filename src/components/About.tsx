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
            Tenho 30 anos e moro em São Paulo, Brasil. Sou estudante de Análise
            e Desenvolvimento de Sistemas na Faculdade FAM, com previsão de
            conclusão em agosto de 2027. Minha relação com a tecnologia sempre
            foi de curiosidade e criação,algo que evoluiu naturalmente para uma
            carreira. Comecei no design e na edição de imagens em uma agência,
            onde aprendi a unir lógica e estética. Antes disso, atuei por oito
            anos como tatuador, experiência que aprimorou meu senso de
            composição, cores e atenção aos detalhes. Hoje, levo esse olhar
            preciso e artístico para o desenvolvimento front-end e para a
            criação de experiências visuais marcantes.
          </p>
          <a
            href="/doc/BrunoDev[FullStack].pdf"
            download="BrunoDev[FullStack].pdf"
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
