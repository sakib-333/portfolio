import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";
import Education from "./Components/Education";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Skills from "./Components/Skills";
import Home from "./Components/Home";
import About from "./Components/About";
import Aos from "aos";
import "aos/dist/aos.css";

const App = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [actvSec, setActvSec] = useState<string>("Home");

  const darkTheme = createTheme({
    palette: {
      mode: theme,
    },
  });

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <ThemeProvider theme={darkTheme}>
      <div className="max-w-screen-2xl mx-auto w-full">
        <Navbar theme={theme} toggleTheme={toggleTheme} actvSec={actvSec} />
        <Home theme={theme} setActvSec={setActvSec} />
        <About setActvSec={setActvSec} />
        <Skills theme={theme} setActvSec={setActvSec} />
        <Projects setActvSec={setActvSec} />
        <Education theme={theme} setActvSec={setActvSec} />
        <Contact setActvSec={setActvSec} />
        <Footer theme={theme} />
      </div>
    </ThemeProvider>
  );
};

export default App;
