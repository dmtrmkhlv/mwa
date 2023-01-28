import * as React from "react";
import Typography from "@mui/material/Typography";
import { Breadcrumbs as MUIBreadcrumbs } from "@mui/material";
import { Link } from "@mui/material";

function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

export function Breadcrumbs() {
  return (
    <div role="presentation" onClick={handleClick}>
      <MUIBreadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/">
          Главная
        </Link>
        <Link
          underline="hover"
          color="inherit"
          href="/material-ui/getting-started/installation/"
        >
          Подарки
        </Link>
        <Typography color="text.primary">Подарок</Typography>
      </MUIBreadcrumbs>
    </div>
  );
}
