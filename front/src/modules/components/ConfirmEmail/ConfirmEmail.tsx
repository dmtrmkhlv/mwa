import { Button, Typography } from "@mui/material";
import { useCustomeNavigate } from "../../hooks";
import { useLocation } from "react-router-dom";
import { useState } from "react";

export function ConfirmEmailComponent() {
  const [navigateToProfile] = useCustomeNavigate("/profile", true);
  const location = useLocation();
  const statusUrl = location.search.slice(1, location.search.length).split("=");

  const style = {
    backgroundColor: "#f7941e",
    fontSize: "20px",
    fontWeight: "bold",
    mt: 4,
    mb: 4,
    "&:hover": {
      backgroundColor: "#f7941e9c",
      boxShadow: "none",
    },
  };

  return (
    <div>
      <Typography variant="h3" component="h3">
        {statusUrl[0] === "status" && statusUrl[1] === "true"
          ? " Адрес почты подтвержден!"
          : "Произошла ошибка, попробуйте позже"}
      </Typography>
      <Button sx={style} variant="contained" {...navigateToProfile}>
        Перейти в Профиль
      </Button>
    </div>
  );
}
