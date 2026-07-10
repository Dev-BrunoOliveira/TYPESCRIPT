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
        <a href="#projetos" className="btn-primary">{t("hero.viewProjects")}</a>
      </motion.div>
    </section>
  );
}

export default Hero;