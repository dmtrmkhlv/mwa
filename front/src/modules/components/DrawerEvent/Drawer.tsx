import MuiDrawer from "@mui/material/Drawer";
import { closedMixin, drawerWidth, openedMixin } from "./DrawerProps";
import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { useNavigate } from "react-router-dom";
import { CreateEvent } from "../CreateEvent";

const rows = [
  { key: 1, link: "/", title: "Главная" },
  { key: 2, link: "/event", title: "Мои список событий" },
  { key: 3, link: "/archive", title: "Архив событий" },
  { key: 4, link: "/booking", title: "Я участник" },
  { key: 5, link: "/gifts", title: "Что я дарю" },
  { key: 6, link: "/gifts", title: "Что мне подарят" },
];

export const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  height: 128,
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

export const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

interface CustomeDrawerProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const CustomeDrawer = (props: CustomeDrawerProps) => {
  const navigate = useNavigate();
  const handleNavigate = (nav: string) => {
    navigate(nav);
  };
  const theme = useTheme();
  const { open, setOpen } = props;
  const handleDrawerClose = () => {
    setOpen(!open);
  };
  return (
    <Drawer variant="permanent" open={open}>
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === "rtl" ? (
            <ChevronRightIcon />
          ) : (
            <ChevronLeftIcon />
          )}
        </IconButton>
      </DrawerHeader>
      <Divider />
      <List>
        {rows.map((row) => (
          <ListItem key={row.key} disablePadding sx={{ display: "block" }}>
            <ListItemButton
              sx={{
                minHeight: 56,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
              onClick={() => handleNavigate(row.link)}>
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}>
                {row.key % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText
                primary={row.title}
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <CreateEvent mini={open} />
      <Divider />
    </Drawer>
  );
};
