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
import { Entry } from "../Button";
import { Container } from "@mui/system";
import { NavLink } from "react-router-dom";
import logo from "../images/logo_orange_little.png";
import "./AppBar.scss";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Slide from "@mui/material/Slide";

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  children: React.ReactElement;
}

interface PropsBar {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const drawerWidth = 240;
const navItems = ["Главная", "О нас", "Услуги", "Подарки"];
const navItemsTwo = [
  { name: "Главная", link: "/" },
  { name: "О нас", link: "/aboutus" },
  { name: "Услуги", link: "/services" },
  { name: "Подарки", link: "/gifts" },
];

function HideOnScroll(props: Props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export function DrawerAppBar(props: PropsBar) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Меню
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
      </List>
      <Divider />
      <ListItem key={"выход"} disablePadding>
        <ListItemButton sx={{ textAlign: "center" }}>
          <ListItemText primary={"выход"} />
        </ListItemButton>
      </ListItem>
      <Entry />
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <HideOnScroll {...props}>
        <AppBar
          component="nav"
          color="transparent"
          sx={{ borderBottomStyle: 0 }}
        >
          <Toolbar
            sx={{
              display: "flex",
              justifyContent: { xs: "end", sm: "center" },
              flexGrow: 1,
              height: 128,
            }}
          >
            <Box
              component={NavLink}
              to={"/"}
              title="Home"
              sx={{ display: { xs: "none", sm: "flex" } }}
            >
              <img src={logo} alt="Our Wishlist Logo" />
            </Box>

            <Box
              sx={{
                display: { xs: "none", sm: "flex" },
                flexGrow: 1,
                justifyContent: { xs: "end", sm: "center" },
              }}
            >
              {navItemsTwo.map((item: any) => (
                <NavLink
                  key={item.name}
                  to={item.link}
                  className="header_wrap-main-nav"
                >
                  {item.name}
                </NavLink>
              ))}
            </Box>
            <IconButton
              size="large"
              color="warning"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { xs: "flex", sm: "none" } }}
            >
              <MenuIcon sx={{ height: 40, width: 40 }} />
            </IconButton>
            <Box
              sx={{
                flexGrow: 0,
                ml: "auto",
                display: { xs: "none", sm: "flex" },
              }}
            >
              <Entry />
            </Box>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
      <Box component="nav">
        <Drawer
          anchor="right"
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
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
      </Box>

      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </>
  );
}
