import { motion } from "framer-motion";
import type { Tech } from "../types";

interface TechCategory {
  category: string;
  techs: Tech[];
}

const techCategories: TechCategory[] = [
  {
    category: "Frontend",
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
    category: "Backend",
    techs: [
      { name: "Node.js", imgSrc: "/IMG/techs/nodejs.png" },
      { name: "Python", imgSrc: "/IMG/techs/python.png" },
      { name: "FastAPI", imgSrc: "/IMG/techs/fastapi.png" },
    ],
  },
  {
    category: "Banco de Dados",
    techs: [
      { name: "Supabase", imgSrc: "/IMG/techs/supabase.jpg" },
      { name: "PostgreSQL", imgSrc: "/IMG/techs/postgresql.png" },
      { name: "MySQL", imgSrc: "/IMG/techs/mysql.png" },
      { name: "Firebase", imgSrc: "/IMG/techs/firebase.png" },
    ],
  },
  {
    category: "Cloud & DevOps",
    techs: [
      { name: "Google Cloud", imgSrc: "/IMG/techs/googleCloud.png" },
      { name: "Docker", imgSrc: "/IMG/techs/docker.png" },
    ],
  },
  {
    category: "Automação & IA",
    techs: [
      { name: "n8n", imgSrc: "/IMG/techs/n8n.png" },
      { name: "Gemini API", imgSrc: "/IMG/techs/geminiAPI.png" },
      { name: "ChatGPT API", imgSrc: "/IMG/techs/chatgpt.png" },
      {name: "Claude", imgSrc: "/IMG/techs/claude.jpg" },
      { name: "Copilot", imgSrc: "/IMG/techs/microsoft-copilot.jpg" },
    ],
  },
];

function Techs() {
  return (
    <section className="techs-section">
      <h2 className="techs-title">Minhas Principais Stacks</h2>

      <div className="techs-categories">
        {techCategories.map((group, groupIdx) => (
          <motion.div
            className="techs-category-block"
            key={group.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: groupIdx * 0.1 }}
          >
            <h3 className="techs-category-title">{group.category}</h3>

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