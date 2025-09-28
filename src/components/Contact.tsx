import { motion } from 'framer-motion';

function Contact() {
  return (
    <section id="contato" className="contact-section">
      <motion.div
        className="contact-content"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2>Contato</h2>
        <p>Me mande um e-mail: brunooliver2015@outlook.com</p>
        <div className="social-links">
          <a href="https://wa.me/message/XDBZLY2ZNU27H1" target="_blank" rel="noopener noreferrer" className="social-btn whatsapp">
            <i className="fa-brands fa-whatsapp"></i> WhatsApp
          </a>
          <a href="https://github.com/Dev-BrunoOliveira" target="_blank" rel="noopener noreferrer" className="social-btn github">
            <i className="fa-brands fa-github"></i> GitHub
          </a>
          <a href="https://www.linkedin.com/in/bruno-oliveira011/" target="_blank" rel="noopener noreferrer" className="social-btn linkedin">
            <i className="fa-brands fa-linkedin"></i> LinkedIn
          </a>
        </div>
      </motion.div>
    </section>
  );
}

export default Contact;