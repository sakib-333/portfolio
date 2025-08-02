import { useEffect, useState } from "react";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Education from "./Components/Education/Education";
import Home from "./Components/Home/Home";
import Projects from "./Components/Projects/Projects";
import Skills from "./Components/Skills/Skills";
import { SectionContext } from "./Provider/SectionContext";
import { NavItem } from "./Interfaces/NavItem";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import Experience from "./Components/Experience/Experience";

const App = () => {
  const [actvSection, setActvSection] = useState<NavItem>("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("div[id]");

      sections.forEach((section) => {
        const sec = section as HTMLElement;

        if (window.scrollY + 200 >= sec.offsetTop) {
          setActvSection(sec.id as NavItem);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <SectionContext.Provider value={{ actvSection, setActvSection }}>
      <div>
        <div className="max-w-6xl w-full mx-auto">
          <Navbar />
          <div className="pt-32">
            <Home />
            <About />
            <Experience />
            <Skills />
            <Projects />
            <Education />
            <Contact />
          </div>
        </div>
        <Footer />
      </div>
    </SectionContext.Provider>
  );
};

export default App;
