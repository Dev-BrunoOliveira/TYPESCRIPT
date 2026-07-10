import "./App.css";
import React, { useState } from "react";
import type { Project } from "./types";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Techs from "./components/Techs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import { useLanguage } from "./contexts/LanguageContext";

const INITIAL_PROJECTS_VISIBLE = 6;

function App(): React.ReactElement {
  const { t } = useLanguage();
  const allProjects = t("projects.data") as Project[];
  
  const [visibleProjects, setVisibleProjects] = useState(
    INITIAL_PROJECTS_VISIBLE,
  );

  const handleLoadMore = () => {
    setVisibleProjects((prevVisible) => prevVisible + 6);
  };

  const projectsToShow = allProjects.slice(0, visibleProjects);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Projects projects={projectsToShow} />

        {visibleProjects < allProjects.length && (
          <div className="load-more-container">
            <button onClick={handleLoadMore} className="btn-load-more">
              {t("projects.loadMore")}
            </button>
          </div>
        )}

        <About />
        <Techs />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
