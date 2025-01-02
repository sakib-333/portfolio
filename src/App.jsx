import React, { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Navbar from "./components/Navbar";

const App = () => {
  const [mood, setMood] = useState("light");

  const darkTheme = createTheme({
    palette: {
      mode: mood,
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Navbar mood={mood} setMood={setMood} />
    </ThemeProvider>
  );
};

export default App;
