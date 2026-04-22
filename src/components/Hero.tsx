import { motion } from 'framer-motion';

function Hero() {
  return (
    <section id="inicio" className="hero">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Front-end Bruno Oliveira
      </motion.h1>
    </section>
  );
}

export default Hero;