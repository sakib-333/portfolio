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
import BedtimeIcon from "@mui/icons-material/Bedtime";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import logo from "/favicon.png";
import { Link, Events, scrollSpy } from "react-scroll";

const drawerWidth = 240;
const navItems = ["About", "Technologies", "Projects", "Education", "Contact"];

function Navbar({ mood, setMood }) {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleChangeMood = () => {
    if (mood === "light") {
      setMood("dark");
    } else {
      setMood("light");
    }
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Sakib
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem disablePadding>
          <ListItemButton
            sx={{ display: "flex", justifyContent: "center" }}
            onClick={handleChangeMood}
          >
            {mood === "light" ? <BedtimeIcon /> : <WbSunnyIcon />}
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  React.useEffect(() => {
    // Initialize scroll events and spy on elements
    Events.scrollEvent.register("begin");
    Events.scrollEvent.register("end");
    scrollSpy.update();

    return () => {
      // Clean up events when component unmounts
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);

  return (
    <Box sx={{ display: "flex", width: "100%", position: "fixed", zIndex: 10 }}>
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{
          maxWidth: "xl",
          position: "static",
          margin: "0 auto",
        }}
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
          <Box sx={{ flexGrow: 1, display: { xs: "none", sm: "flex" } }}>
            <img
              src={logo}
              style={{
                width: "30px",
                height: "30px",
                borderRadius: "100%",
                marginRight: "4px",
              }}
            />
            <Typography variant="h6" component="div">
              Sakib
            </Typography>
          </Box>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: "#fff", textTransform: "none" }}>
                <Link
                  to={`${item}`}
                  smooth={true}
                  duration={500}
                  spy={true}
                  activeClass="active"
                >
                  {item}
                </Link>
              </Button>
            ))}
            <IconButton sx={{ color: "#fff" }} onClick={handleChangeMood}>
              {mood === "light" ? <BedtimeIcon /> : <WbSunnyIcon />}
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          // container={container}
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
}

export default Navbar;
