import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";

export function BasicMenu() {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleOne = () => {
    navigate("/");
    setAnchorEl(null);
  };
  const handleTwo = () => {
    navigate("/gifts");
    setAnchorEl(null);
  };
  const handleFour = () => {
    navigate("/event");
    setAnchorEl(null);
  };
  const handleThree = () => {
    navigate("/test");
    setAnchorEl(null);
  };
  const handleFive = () => {
    navigate("/create");
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
        <MenuItem onClick={handleOne}>Главная</MenuItem>
        <MenuItem onClick={handleTwo}>Подарки</MenuItem>
        <MenuItem onClick={handleFour}>События</MenuItem>
        <MenuItem onClick={handleThree}>Подарок</MenuItem>
        <MenuItem onClick={handleFive}>Создать</MenuItem>
      </Menu>
    </div>
  );
}
