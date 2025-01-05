import React from "react";
import { Box, Button, Typography } from "@mui/material";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import EmailIcon from "@mui/icons-material/Email";
import { Typewriter } from "react-simple-typewriter";
import coding from "../assets/codding.json";
import Lottie from "lottie-react";
import { Element } from "react-scroll";

const Banner = () => {
  return (
    <Element name="About">
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: { xs: "column-reverse", md: "row" },
        }}
      >
        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            textAlign: { xs: "center", md: "left" },
            width: { sx: "100%" },
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem", lg: "3.5rem" },
              fontWeight: "bold",
              marginBottom: "1rem",
            }}
          >
            Hello there!
          </Typography>
          <Typography
            variant="h3"
            sx={{
              fontSize: { xs: "1.5rem", md: "2rem", lg: "3rem" },
              marginBottom: "1rem",
            }}
          >
            I am{" "}
            <Typography variant="span" sx={{ color: "orange" }}>
              Sakibur{" "}
            </Typography>
            <Typography variant="span" sx={{ color: "blueviolet" }}>
              Rahman.
            </Typography>
          </Typography>
          <Box
            sx={{
              marginBottom: "1rem",
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: 1,
            }}
          >
            <Typography variant="p">Highly passionate about</Typography>
            <Typography variant="p" sx={{ color: "red" }}>
              <Typewriter
                words={[
                  "web development.",
                  "react development.",
                  "problem solving.",
                ]}
                loop
                cursor
                typeSpeed={10}
                deleteSpeed={10}
                delaySpeed={2000}
              />
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              gap: 1,
            }}
          >
            <Button variant="contained" color="success">
              <ArrowDownwardIcon /> <Typography>Download Resume</Typography>
            </Button>
            <Button variant="outlined">
              <EmailIcon />{" "}
              <Typography sx={{ marginLeft: 1 }}>Contact Me</Typography>
            </Button>
          </Box>
        </Box>
        <Box sx={{ flex: 1, maxWidth: "500px" }}>
          <Lottie animationData={coding} loop={true} />
        </Box>
      </Box>
    </Element>
  );
};

export default Banner;
