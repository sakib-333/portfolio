import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { Zoom } from "react-awesome-reveal";
import myProjects from "../assets/myProjects";
import Carousel from "react-material-ui-carousel";
import { Element } from "react-scroll";

const MyProjects = () => {
  return (
    <Element name="Projects">
      <Box sx={{ marginTop: "3rem" }}>
        <Zoom cascade>
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem", lg: "3.5rem" },
              fontWeight: "bold",
              marginBottom: "2rem",
              textAlign: "center",
              color: "green",
            }}
          >
            My Projects
          </Typography>
        </Zoom>
        <Box>
          {myProjects.map((project, indx) => (
            <Zoom key={project.id}>
              <Box
                sx={{
                  display: "flex",
                  gap: "1rem",
                  flexDirection: {
                    xs: "column",
                    md: indx % 2 ? "row-reverse" : "row",
                  },
                  marginBottom: "4rem",
                }}
              >
                <Carousel sx={{ flex: 1 }}>
                  {project.previewImages.map((imgURL) => (
                    <img
                      style={{ width: "100%" }}
                      key={Math.random()}
                      src={imgURL}
                    />
                  ))}
                </Carousel>
                <Box
                  sx={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                  }}
                >
                  <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                    {project.projectName}
                  </Typography>
                  <Typography variant="p">{project.decription}</Typography>
                  <Box>
                    <Typography
                      variant="p"
                      sx={{
                        fontWeight: "bold",
                      }}
                    >
                      Frontend technologies:{" "}
                    </Typography>
                    <Typography variant="p">{project.frontTech}</Typography>
                  </Box>
                  <Box>
                    <Typography variant="p" sx={{ fontWeight: "bold" }}>
                      Backend technologies:{" "}
                    </Typography>
                    <Typography variant="p">{project.backTech}</Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: { xs: "column", sm: "row" },
                      gap: 1,
                    }}
                  >
                    <Button
                      target="_blank"
                      color="success"
                      href={project.liveSite}
                      variant="contained"
                    >
                      Live Link
                    </Button>
                    <Button
                      target="_blank"
                      color="primary"
                      href={project.githubRepoFront}
                      variant="contained"
                    >
                      Frontend Repo
                    </Button>
                    <Button
                      target="_blank"
                      color="secondary"
                      href={project.githubRepoBack}
                      variant="contained"
                    >
                      Backend Repo
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Zoom>
          ))}
        </Box>
      </Box>
    </Element>
  );
};

export default MyProjects;
