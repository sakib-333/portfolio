import { Box, Typography } from "@mui/material";
import React from "react";
import { Fade, Zoom } from "react-awesome-reveal";

const About = () => {
  return (
    <Box sx={{ marginTop: "3rem", minHeight: "500px" }}>
      <Zoom cascade>
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem", lg: "3.5rem" },
            fontWeight: "bold",
            marginBottom: "1rem",
            textAlign: "center",
            color: "green",
          }}
        >
          About
        </Typography>
      </Zoom>

      <Fade cascade delay={500}>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            minHeight: "350px",
          }}
        >
          <Typography variant="h4" sx={{ flex: 1, fontStyle: "italic" }}>
            "Lorem ipsum dolor sit amet consectetur".
          </Typography>
          <Box
            sx={{
              flex: 1,
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
              minHeight: "350px",
            }}
          >
            <Typography variant="p">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Quisquam, ducimus? Cumque ea fugit incidunt deleniti veritatis
              corrupti eos ipsam laboriosam labore adipisci sequi vitae
              repellat, vero, laborum distinctio ad et.
            </Typography>
            <Typography variant="p">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
              reprehenderit aut porro, perspiciatis dolor ullam.
            </Typography>
            <Typography variant="p">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
              voluptatem dolores repellat consectetur rerum amet aliquam cum
              itaque at ut.
            </Typography>
          </Box>
        </Box>
      </Fade>
    </Box>
  );
};

export default About;
