import { Box, IconButton, Typography } from "@mui/material";
import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";

const Footer = () => {
  return (
    <Box
      sx={{
        marginTop: "3rem",
        minHeight: "100px",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: { xs: "end", md: "space-between" },
        alignItems: { xs: "center", md: "flex-end" },
      }}
    >
      <Box>
        <Typography variant="p">All Rights Reserved &copy; 2025</Typography>
      </Box>
      <Box>
        <IconButton target="_blank" href="https://github.com/sakib-333">
          <GitHubIcon />
        </IconButton>
        <IconButton target="_blank" href="www.linkedin.com/in/r-sakib">
          <LinkedInIcon />
        </IconButton>
        <IconButton target="_blank" href="https://www.facebook.com/sakib071">
          <FacebookIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Footer;
