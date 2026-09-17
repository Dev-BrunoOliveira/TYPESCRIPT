import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

function Hero() {
  const { t } = useLanguage();

  return (
    <section id="inicio" className="hero">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {t("hero.title")}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        {t("hero.description")}
      </motion.p>

      <motion.div
        className="hero-ctas"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <a href="#projetos" className="btn-primary">
          {t("hero.viewProjects")}
        </a>
        <a
          href="/doc/BrunoOliveira-Dev[FullStack].pdf"
          download="BrunoOliveira-Dev[FullStack].pdf"
          className="btn-secondary"
        >
          <i className="fa-solid fa-file-pdf"></i>
          {t("hero.downloadCv")}
        </a>
        <a
          href="https://www.linkedin.com/in/bruno-oliveira011/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary"
        >
          <i className="fa-brands fa-linkedin"></i>
          {t("hero.linkedin")}
        </a>
        <a
          href="https://github.com/Dev-BrunoOliveira"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary"
        >
          <i className="fa-brands fa-github"></i>
          {t("hero.github")}
        </a>
      </motion.div>
    </section>
  );
}

export default Hero;