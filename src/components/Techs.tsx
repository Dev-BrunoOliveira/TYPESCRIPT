import { motion } from "framer-motion";
import type { Tech } from "../types";
import { useLanguage } from "../contexts/LanguageContext";

interface TechCategory {
  categoryKey: string;
  techs: Tech[];
}

const techCategories: TechCategory[] = [
  {
    categoryKey: "frontend",
    techs: [
      { name: "HTML", imgSrc: "/IMG/techs/html.png" },
      { name: "CSS", imgSrc: "/IMG/techs/css-3.png" },
      { name: "JavaScript", imgSrc: "/IMG/techs/java-script.png" },
      { name: "TypeScript", imgSrc: "/IMG/techs/typescript.png" },
      { name: "React", imgSrc: "/IMG/techs/react.png" },
      { name: "Vite", imgSrc: "/IMG/techs/vite.png" },
    ],
  },
  {
    categoryKey: "backend",
    techs: [
      { name: "Node.js", imgSrc: "/IMG/techs/nodejs.png" },
      { name: "Python", imgSrc: "/IMG/techs/python.png" },
      { name: "FastAPI", imgSrc: "/IMG/techs/fastapi.png" },
    ],
  },
  {
    categoryKey: "database",
    techs: [
      { name: "Supabase", imgSrc: "/IMG/techs/supabase.jpg" },
      { name: "PostgreSQL", imgSrc: "/IMG/techs/postgresql.png" },
      { name: "MySQL", imgSrc: "/IMG/techs/mysql.png" },
      { name: "Firebase", imgSrc: "/IMG/techs/firebase.png" },
    ],
  },
  {
    categoryKey: "cloud",
    techs: [
      { name: "Google Cloud", imgSrc: "/IMG/techs/googleCloud.png" },
      { name: "Docker", imgSrc: "/IMG/techs/docker.png" },
    ],
  },
  {
    categoryKey: "ai",
    techs: [
      { name: "n8n", imgSrc: "/IMG/techs/n8n.png" },
      { name: "Gemini API", imgSrc: "/IMG/techs/geminiAPI.png" },
      { name: "ChatGPT API", imgSrc: "/IMG/techs/chatgpt.png" },
      { name: "Claude", imgSrc: "/IMG/techs/claude.jpg" },
      { name: "Copilot", imgSrc: "/IMG/techs/microsoft-copilot.jpg" },
    ],
  },
];

function Techs() {
  const { t } = useLanguage();
  const pillars = t("techs.pillars") as { icon: string, title: string, description: string }[];

  return (
    <section className="techs-section">

      {/* 4 cards de pilares */}
      <div className="techs-pillars">
        {pillars.map((pillar, idx) => (
          <motion.div
            className="pillar-card"
            key={pillar.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
          >
            <span className="pillar-icon">{pillar.icon}</span>
            <h3 className="pillar-title">{pillar.title}</h3>
            <p className="pillar-description">{pillar.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Grid de stacks */}
      <h2 className="techs-title">{t("techs.title")}</h2>

      <div className="techs-categories">
        {techCategories.map((group, groupIdx) => (
          <motion.div
            className="techs-category-block"
            key={group.categoryKey}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: groupIdx * 0.1 }}
          >
            <h3 className="techs-category-title">{t(`techs.categories.${group.categoryKey}`)}</h3>

            <div className="techs-carousel">
              {group.techs.map((tech, idx) => (
                <motion.div
                  className="card-techs"
                  key={tech.name}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: idx * 0.08 }}
                >
                  <img src={tech.imgSrc} alt={`Logo do ${tech.name}`} />
                  <span>{tech.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Techs;