import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useState } from "react";
import Navbar from "./Components/Navbar";
const App = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

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
        <Navbar theme={theme} toggleTheme={toggleTheme} />
      </div>
    </ThemeProvider>
  );
};

export default App;
