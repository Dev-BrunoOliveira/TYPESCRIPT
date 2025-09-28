import { useState, useEffect } from "react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
              <a href="#inicio" onClick={toggleMenu}>
                Início
              </a>
            </li>
            <li>
              <a href="#projetos" onClick={toggleMenu}>
                Projetos
              </a>
            </li>
            <li>
              <a href="#sobre" onClick={toggleMenu}>
                Sobre
              </a>
            </li>
            <li>
              <a href="#contato" onClick={toggleMenu}>
                Contato
              </a>
            </li>
          </ul>
        </nav>

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
    </header>
  );
}

export default Header;
