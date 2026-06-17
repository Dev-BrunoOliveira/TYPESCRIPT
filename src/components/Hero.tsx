import { motion } from 'framer-motion';

function Hero() {
  return (
    <section id="inicio" className="hero">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        FullStack Bruno Oliveira
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        Desenvolvo interfaces que unem lógica de back-end com sensibilidade
        visual de quem veio do design.
      </motion.p>

      <motion.div
        className="hero-ctas"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <a href="#projetos" className="btn-primary">Ver projetos</a>
      </motion.div>
    </section>
  );
}

export default Hero;