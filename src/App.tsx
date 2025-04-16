import { useState } from "react";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Education from "./Components/Education/Education";
import Home from "./Components/Home/Home";
import Projects from "./Components/Projects/Projects";
import Skills from "./Components/Skills/Skills";
import { SectionContext } from "./Provider/SectionContext";
import { NavItem } from "./Interfaces/NavItem";
import Footer from "./Components/Footer/Footer";

const App = () => {
  const [actvSection, setActvSection] = useState<NavItem>("home");

  return (
    <SectionContext.Provider value={{ actvSection, setActvSection }}>
      <div>
        <div className="max-w-7xl w-full mx-auto">
          <Home />
          <About />
          <Skills />
          <Projects />
          <Education />
          <Contact />
        </div>
        <Footer />
      </div>
    </SectionContext.Provider>
  );
};

export default App;
