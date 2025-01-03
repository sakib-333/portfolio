import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";
import React from "react";
import myTechnologies from "../assets/myTechnologies";
import Grid from "@mui/material/Grid2";
import { Fade, Zoom } from "react-awesome-reveal";

const Technologies = () => {
  return (
    <Box sx={{ marginTop: "3rem" }}>
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
          Technologies I Know
        </Typography>
      </Zoom>

      <Fade cascade delay={500}>
        <Grid
          container
          spacing={3}
          sx={{
            justifyContent: "space-between",
            margin: "2rem auto 0",
          }}
        >
          {myTechnologies.map((myTech) => (
            <Grid key={myTech.id}>
              <Box key={myTech.id} xs={12} sm={6} md={3}>
                <Typography
                  variant="h5"
                  sx={{ fontWeight: "bold", color: "#e65100" }}
                >
                  {myTech.title}
                </Typography>
                {myTech.technologies.map((item) => (
                  <List
                    key={item}
                    sx={{
                      width: "100%",
                      color: "gray",
                      listStyleType: "disc",
                      pl: 2,
                      "& .MuiListItem-root": {
                        display: "list-item",
                      },
                    }}
                  >
                    <ListItem sx={{ display: "list-item" }}>
                      <ListItemText primary={item} />
                    </ListItem>
                  </List>
                ))}
              </Box>
            </Grid>
          ))}
        </Grid>
      </Fade>
    </Box>
  );
};

export default Technologies;
