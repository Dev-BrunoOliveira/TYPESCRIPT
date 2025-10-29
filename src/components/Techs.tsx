import { motion } from 'framer-motion';
import type { Tech } from '../types';

const techs: Tech[] = [
  { name: 'HTML', imgSrc: '/IMG/techs/html.png' },
  { name: 'CSS', imgSrc: '/IMG/techs/css-3.png' },
  { name: 'JavaScript', imgSrc: '/IMG/techs/java-script.png' },
  { name: 'TypeScript', imgSrc: '/IMG/techs/typescript.png' },
  { name: 'React', imgSrc: '/IMG/techs/react.png' },
  { name: 'Vite', imgSrc: '/IMG/techs/vite.png' },
  { name: 'Firebase', imgSrc: '/IMG/techs/firebase.png' },
  { name: 'Python', imgSrc: '/IMG/techs/python.png' },
  { name: 'MySQL', imgSrc: '/IMG/techs/mysql.png' },
];

function Techs() {
  return (
    <section className="techs-section">
      <h2 className="techs-title">Minhas Principais Stacks</h2>
      <div className="techs-grid">
        {techs.map((tech, idx) => (
          <motion.div
            className="card-techs"
            key={tech.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            <img src={tech.imgSrc} alt={`Logo do ${tech.name}`} />
            <span>{tech.name}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Techs;