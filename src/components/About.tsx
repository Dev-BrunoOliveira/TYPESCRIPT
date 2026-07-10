import { motion } from "framer-motion";
import { useLanguage } from "../contexts/LanguageContext";

function About() {
  const { t } = useLanguage();

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
          <img src="/IMG/20br.webp" alt="Bruno Oliveira" />
        </motion.div>
        <motion.div
          className="about-text"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2>{t("about.title")}</h2>

<p>{t("about.p1")}</p>
<p>{t("about.p2")}</p>
<p>{t("about.p3")}</p>
<p>{t("about.p4")}</p>
<p>{t("about.p5")}</p>
<p>{t("about.p6")}</p>

          <a
            href="/doc/BrunoOliveira-Dev[FullStack].pdf"
            download="BrunoOliveira-Dev[FullStack].pdf"
            className="btn-cv"
          >
            {t("about.downloadCv")}
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
