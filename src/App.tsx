import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useState } from "react";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Technologies from "./Components/Technologies";
import Projects from "./Components/Projects";
import Education from "./Components/Education";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

const App = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [actvSec, setActvSec] = useState<string>("About");

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
  return (
    <ThemeProvider theme={darkTheme}>
      <div className="max-w-screen-2xl mx-auto w-full">
        <Navbar theme={theme} toggleTheme={toggleTheme} actvSec={actvSec} />
        <About setActvSec={setActvSec} />
        <Technologies theme={theme} setActvSec={setActvSec} />
        <Projects setActvSec={setActvSec} />
        <Education theme={theme} setActvSec={setActvSec} />
        <Contact setActvSec={setActvSec} />
        <Footer theme={theme} />
      </div>
    </ThemeProvider>
  );
};

export default App;
