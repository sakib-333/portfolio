import { Box, Typography } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import React from "react";
import { Fade } from "react-awesome-reveal";

const MyEducation = () => {
  return (
    <Box
      sx={{
        marginTop: "3rem",
        minHeight: "500px",
        backgroundColor: "#f1f8e9",
        color: "#000",
        display: "flex",
        alignItems: "center",
        flexDirection: { xs: "column", md: "row" },
      }}
    >
      <Box
        sx={{
          flex: 1,
          paddingTop: { xs: "2rem" },
          paddingLeft: { md: "2rem" },
        }}
      >
        <Fade>
          <Box
            sx={{
              width: "80px",
              height: "15px",
              bgcolor: "red",
              borderRadius: "1rem",
            }}
          ></Box>
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem", lg: "3.5rem" },
              fontWeight: "bold",
              color: "green",
              marginBottom: { xs: "2rem" },
            }}
          >
            My Education
          </Typography>
        </Fade>
      </Box>
      <Box
        sx={{
          flex: 1,
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            width: "100%",
            minHeight: "400px",
            borderLeft: { md: 2 },
            position: { md: "relative" },
          }}
        >
          <Fade delay={400}>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                alignItems: "flex-start",
                position: { md: "absolute" },
                left: { md: "-13px" },
                top: { md: "-5px" },
              }}
            >
              <CircleIcon sx={{ display: { xs: "none", md: "block" } }} />
              <Box
                sx={{
                  marginLeft: "1.5rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                }}
              >
                <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                  B.Sc in Computer Science and Engineering
                </Typography>
                <Typography variant="p">
                  Bangabandhu Sheikh Mujibur Rahman Science and Technology
                  University, Gopalganj-8100
                </Typography>
                <Typography variant="caption">2024</Typography>
              </Box>
            </Box>
          </Fade>

          <Fade delay={600}>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                alignItems: "flex-start",
                position: { md: "absolute" },
                left: { md: "-13px" },
                top: { md: "35%" },
              }}
            >
              <CircleIcon sx={{ display: { xs: "none", md: "block" } }} />
              <Box
                sx={{
                  marginLeft: "1.5rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                }}
              >
                <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                  H.S.C
                </Typography>
                <Typography variant="p">
                  Haji Lalmia City University College, Gopalganj
                </Typography>
                <Typography variant="caption">2017</Typography>
              </Box>
            </Box>
          </Fade>
          <Fade delay={800}>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                alignItems: "flex-start",
                position: { md: "absolute" },
                left: { md: "-13px" },
                top: { md: "70%" },
              }}
            >
              <CircleIcon sx={{ display: { xs: "none", md: "block" } }} />
              <Box
                sx={{
                  marginLeft: "1.5rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                }}
              >
                <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                  S.S.C
                </Typography>
                <Typography variant="p">
                  Kotalipara Public Institution
                </Typography>
                <Typography variant="caption">2015</Typography>
              </Box>
            </Box>
          </Fade>
        </Box>
      </Box>
    </Box>
  );
};

export default MyEducation;
