import React, { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import { Box } from "@mui/material";

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
      <Box sx={{ p: 2, maxWidth: "xl", position: "static", margin: "0 auto" }}>
        <Banner />
      </Box>
    </ThemeProvider>
  );
};

export default App;
