import { Box, IconButton, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";

interface FoterProps {
  theme: "light" | "dark";
}

const Footer = ({ theme }: FoterProps) => {
  return (
    <div
      className={`w-full px-2 py-4 bg-[${
        theme === "light" ? "#e0f2f1" : "#263238"
      }] flex flex-col items-center justify-between sm:flex-row`}
    >
      <Box>
        <Typography variant="subtitle1">
          All Rights Reserved &copy; 2025
        </Typography>
      </Box>
      <Box>
        <IconButton target="_blank" href="https://github.com/sakib-333">
          <GitHubIcon />
        </IconButton>
        <IconButton target="_blank" href="www.linkedin.com/in/sakibur-rahman">
          <LinkedInIcon />
        </IconButton>
        <IconButton target="_blank" href="https://www.facebook.com/sakib071">
          <FacebookIcon />
        </IconButton>
        <IconButton target="_blank" href="https://x.com/sakib_333x">
          <XIcon />
        </IconButton>
      </Box>
    </div>
  );
};

export default Footer;
