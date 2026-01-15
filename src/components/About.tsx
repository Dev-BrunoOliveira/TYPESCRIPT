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
            Tenho 30 anos e resido em São Paulo, Brasil. Sou estudante de
            Análise e Desenvolvimento de Sistemas na Faculdade FAM, com previsão
            de conclusão em agosto de 2027. Minha trajetória com tecnologia
            sempre foi movida pela curiosidade e pela criação. Iniciei minha
            carreira no design gráfico e edição de imagens, atuando em agência,
            onde desenvolvi a capacidade de unir estética, usabilidade e lógica.
            Antes disso, trabalhei por oito anos como tatuador, experiência que
            refinou meu senso de composição visual, cores, precisão e atenção
            aos detalhes. Atualmente, aplico esse olhar criativo no
            desenvolvimento front-end, criando interfaces modernas, responsivas
            e focadas em experiência do usuário, utilizando tecnologias como
            React, TypeScript, Tailwind CSS e Vite. Paralelamente, venho
            expandindo meus conhecimentos em back-end, com foco em integrações,
            bancos de dados e lógica de negócio, buscando entregar soluções mais
            completas e funcionais. Meu objetivo é atuar em projetos onde design
            e tecnologia caminham juntos, transformando ideias em experiências
            digitais eficientes, intuitivas e visualmente marcantes.
          </p>
          <a
            href="/doc/BrunoOliveiraDev[FullStack].pdf"
            download="BrunoOliveiraDev[FullStack].pdf"
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
