import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Element } from "react-scroll";
import myProjects from "../assets/myProjects";
import Carousel from "react-material-ui-carousel";
import { Box, Button, Typography } from "@mui/material";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import GitHubIcon from "@mui/icons-material/GitHub";

interface ProjectsProps {
  setActvSec: React.Dispatch<React.SetStateAction<string>>;
}

const Projects = ({ setActvSec }: ProjectsProps) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
  });
  useEffect(() => {
    if (inView) {
      setActvSec("Projects");
    }
  }, [inView, setActvSec]);

  return (
    <Element name="Projects">
      <div
        ref={ref}
        className="w-full h-full p-4 py-4 sm:py-6 md:py-8 lg:py-10"
      >
        <h1 className="font-bold text-center text-[28px] sm:text-4xl md:text-5xl lg:text-6xl">
          My Projects
        </h1>
        <div className="mt-4 sm:mt-5 md:mt-6 lg:mt-7">
          <Box>
            {myProjects.map((project, indx) => (
              <Box
                key={project.id}
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
                  <h1 className="font-bold text-xl sm:text-[22px] md:text-[24px] lg:text-[26px]">
                    {project.projectName}
                  </h1>
                  <p className="text-justify">{project.decription}</p>
                  <Box>
                    <Typography
                      variant="subtitle1"
                      sx={{
                        fontWeight: "bold",
                      }}
                    >
                      Frontend technologies:{" "}
                    </Typography>
                    <Typography variant="subtitle1">
                      {project.frontTech}
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                      Backend technologies:{" "}
                    </Typography>
                    <Typography variant="subtitle1">
                      {project.backTech}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      width: "100%",
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
                      sx={{
                        fontSize: "12px",
                      }}
                    >
                      <LiveTvIcon
                        sx={{ fontSize: "16px", marginRight: "4px" }}
                      />
                      Live
                    </Button>
                    <Button
                      target="_blank"
                      color="primary"
                      href={project.githubRepoFront}
                      variant="contained"
                      sx={{
                        fontSize: "12px",
                      }}
                    >
                      <GitHubIcon
                        sx={{ fontSize: "16px", marginRight: "4px" }}
                      />
                      Frontend
                    </Button>
                    <Button
                      target="_blank"
                      color="secondary"
                      href={project.githubRepoBack}
                      variant="contained"
                      sx={{
                        fontSize: "12px",
                      }}
                    >
                      <GitHubIcon
                        sx={{ fontSize: "16px", marginRight: "4px" }}
                      />
                      Backend
                    </Button>
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>
        </div>
      </div>
    </Element>
  );
};

export default Projects;
