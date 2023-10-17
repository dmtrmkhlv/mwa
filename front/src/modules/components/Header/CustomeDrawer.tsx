import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import { Entry } from "../Button";
import "./Header.css";
import { ChakraProvider, ColorMode } from "@chakra-ui/react";
import { Box as BoxSwitcher } from "@chakra-ui/react";
import { ColorModeSwitcher } from "../Switcher/ColorModeSwitcher";
import { navItemsProps } from "./HeaderProps";

interface CustomeProps {
  handleDrawerToggle: () => void;
  navItems: navItemsProps[];
  colorMode: ColorMode;
}

export const CustomeDrawer = (props: CustomeProps) => {
  const { handleDrawerToggle, navItems, colorMode } = props;
  return (
    <Box
      onClick={handleDrawerToggle}
      sx={{ textAlign: "center", width: "100%" }}
    >
      <Typography variant="h6" sx={{ my: 2 }}>
        Меню
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }} href={item.link}>
              <ListItemText primary={item.name} />
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
      <ChakraProvider>
        <BoxSwitcher py={2} bg={colorMode === "dark" ? "gray.600" : "none"}>
          <ColorModeSwitcher bg="none" />
        </BoxSwitcher>
      </ChakraProvider>
    </Box>
  );
};
