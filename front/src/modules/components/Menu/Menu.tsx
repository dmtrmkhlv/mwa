import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState, MouseEvent } from "react";
import { CreateEvent } from "../CreateEvent";

const rows = [
  { key: 1, link: "/", title: "Главная" },
  { key: 2, link: "/gifts", title: "Подарки" },
  { key: 3, link: "/event", title: "События" },
  { key: 4, link: "/event", title: "Подарок" },
  { key: 5, link: "/create", title: "Создать" },
];

export function BasicMenu() {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleNavigate = (nav: string) => {
    navigate(nav);
    setAnchorEl(null);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        onClick={handleClick}
        size="large"
        edge="start"
        color="inherit"
        aria-label="open drawer"
        sx={{ mr: 2 }}
      >
        <MenuIcon />
      </IconButton>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {rows.map((row) => {
          return (
            <MenuItem onClick={() => handleNavigate(row.link)}>
              {row.title}
            </MenuItem>
          );
        })}
        <CreateEvent />
      </Menu>
    </div>
  );
}
