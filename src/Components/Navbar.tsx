import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import lightMoodLogo from "/lightMoodLogo.png";
import darkMoodLogo from "/darkMoodLogo.png";
import BedtimeIcon from "@mui/icons-material/Bedtime";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import { Link } from "react-scroll";

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  theme: "light" | "dark";
  toggleTheme: () => void;
  actvSec: string;
}

const drawerWidth = 240;
const navItems = [
  "Home",
  "About",
  "Skills",
  "Projects",
  "Education",
  "Contact",
];

const Navbar = ({ window, theme, toggleTheme, actvSec }: Props) => {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2, fontWeight: "bold" }}>
        Sakib
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton
              sx={{
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Link
                to={`${item}`}
                style={{
                  width: "100%",
                  textDecoration: actvSec === item ? "underline" : "none",
                }}
                smooth={true}
                duration={1000}
              >
                <ListItemText primary={item} />
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <ListItemButton onClick={toggleTheme}>
            {theme === "light" ? <BedtimeIcon /> : <WbSunnyIcon />}
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        position: "fixed",
        left: "0",
        zIndex: 10,
      }}
    >
      <CssBaseline />
      <AppBar
        sx={{ maxWidth: "1536px", position: "static", margin: "0 auto" }}
        component="nav"
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <img
              className="w-12 h-12 rounded-full mr-1"
              src={theme === "light" ? lightMoodLogo : darkMoodLogo}
            />
          </Box>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "block", fontWeight: "bold" },
            }}
          >
            Sakib
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button
                key={item}
                sx={{
                  color: actvSec === item ? "#FFD700" : "#fff",
                  textDecoration: actvSec === item ? "underline" : "none",
                  textTransform: "none",
                  "&:hover": {
                    textDecoration: "underline",
                  },
                  fontSize: "12px",
                }}
              >
                <Link to={`${item}`} smooth={true} duration={1000}>
                  {item}
                </Link>
              </Button>
            ))}
            <IconButton sx={{ color: "#fff" }} onClick={toggleTheme}>
              {theme === "light" ? <BedtimeIcon /> : <WbSunnyIcon />}
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
};

export default Navbar;
