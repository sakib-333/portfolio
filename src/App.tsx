import { useState, useEffect } from "react";
import Navbar from "./components/header/Navbar";
import About from "./components/main/About";
import Experience from "./components/main/Experience";
import Contact from "./components/main/Contact";
import Education from "./components/main/Education";
import Home from "./components/main/Home";
import Skills from "./components/main/Skills";
import Projects from "./components/main/Projects";
import Footer from "./components/footer/Footer";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const App = () => {
  const [activeSection, setActiveSection] = useState<string>("home");

  const handleScroll = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const handleScrollSpy = () => {
      const sections = document.querySelectorAll("section[id]");
      sections.forEach((section) => {
        const sec = section as HTMLElement;
        if (window.scrollY + 400 >= sec.offsetTop) {
          setActiveSection(sec.id);
        }
      });
    };

    window.addEventListener("scroll", handleScrollSpy);
    return () => window.removeEventListener("scroll", handleScrollSpy);
  }, []);

  return (
    <div className="min-h-screen bg-zinc-950 text-white selection:bg-primary-container selection:text-white">
      <Navbar activeSection={activeSection} handleScroll={handleScroll} />
      <main className="w-full mx-auto">
        <Home handleScroll={handleScroll} />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <About />
        <Contact />
      </main>
      <Footer />
      <ToastContainer position="top-center" theme="dark" />
    </div>
  );
};

export default App