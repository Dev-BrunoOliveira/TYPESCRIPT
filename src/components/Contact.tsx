import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

function Contact() {
  const [status, setStatus] = useState<null | "sending" | "success" | "error">(
    null,
  );

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    const formData = new FormData(e.target as HTMLFormElement);

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/brunooliver2015@outlook.com",
        {
          method: "POST",
          body: formData,
          headers: { Accept: "application/json" },
        },
      );

      if (response.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

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

        <AnimatePresence mode="wait">
          {status === "success" ? (
            <motion.div
              key="success"
              className="success-message"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
            >
              <i className="fa-solid fa-circle-check"></i>
              <h3>E-mail enviado com sucesso!</h3>
              <p>Obrigado, Bruno Oliveira entrará em contato em breve.</p>
              <button onClick={() => setStatus(null)} className="back-btn">
                Enviar outra mensagem
              </button>
            </motion.div>
          ) : (
            <motion.div key="form" exit={{ opacity: 0, y: -20 }}>
              <p>Mande sua mensagem abaixo:</p>
              <div className="contact-form-container">
                <form onSubmit={handleSubmit} className="direct-form">
                  <div className="form-row">
                    <input
                      type="text"
                      name="name"
                      placeholder="Seu Nome"
                      required
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Seu E-mail"
                      required
                    />
                  </div>
                  <textarea
                    name="message"
                    placeholder="Como posso te ajudar?"
                    rows={4}
                    required
                  ></textarea>

                  <button
                    type="submit"
                    className="send-btn"
                    disabled={status === "sending"}
                  >
                    {status === "sending" ? "Enviando..." : "Enviar Mensagem"}
                    <i className="fa-solid fa-paper-plane"></i>
                  </button>
                </form>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="social-links">
          <a
            href="https://wa.me/message/XDBZLY2ZNU27H1"
            target="_blank"
            rel="noopener noreferrer"
            className="social-btn whatsapp"
          >
            <i className="fa-brands fa-whatsapp"></i> WhatsApp
          </a>
          <a
            href="https://github.com/Dev-BrunoOliveira"
            target="_blank"
            rel="noopener noreferrer"
            className="social-btn github"
          >
            <i className="fa-brands fa-github"></i> GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/bruno-oliveira011/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-btn linkedin"
          >
            <i className="fa-brands fa-linkedin"></i> LinkedIn
          </a>
        </div>
      </motion.div>
    </section>
  );
}

export default Contact;
