import { useState, useEffect } from "react";
import { useLanguage } from "../contexts/LanguageContext";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isMenuOpen]);

  return (
    <header className="navbar">
      <div className="nav-container">
        <nav className={`nav-links ${isMenuOpen ? "active" : ""}`}>
          <ul className="nav-list">
            <li>
              <a href="#inicio" onClick={() => isMenuOpen && toggleMenu()}>
                {t("header.home")}
              </a>
            </li>
            <li>
              <a href="#projetos" onClick={() => isMenuOpen && toggleMenu()}>
                {t("header.projects")}
              </a>
            </li>
            <li>
              <a href="#sobre" onClick={() => isMenuOpen && toggleMenu()}>
                {t("header.about")}
              </a>
            </li>
            <li>
              <a href="#contato" onClick={() => isMenuOpen && toggleMenu()}>
                {t("header.contact")}
              </a>
            </li>
          </ul>
        </nav>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <button 
            onClick={toggleLanguage} 
            style={{ 
              background: 'transparent', 
              border: '1px solid #fff', 
              color: '#fff', 
              padding: '4px 8px', 
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '14px',
              zIndex: 1000
            }}
          >
            {language === "pt" ? "EN" : "PT"}
          </button>
          
          <button
            className={`hamburger ${isMenuOpen ? "active" : ""}`}
            onClick={toggleMenu}
            aria-label="Abrir ou fechar menu"
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
