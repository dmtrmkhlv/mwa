import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { LayoutProps } from "./LayoutProps";
import { Breadcrumbs, PrimarySearchAppBar } from "../components";
import { Container } from "@mui/material";

export default function Layout({ children }: LayoutProps): JSX.Element {
  return (
    <>
      <PrimarySearchAppBar />

      <Container maxWidth="xl">
        <Breadcrumbs />
        <Box
          sx={{
            mt: 2,
            display: "flex",
            flexWrap: "wrap",
            alignContent: "center",
          }}
        >
          {children}
        </Box>
      </Container>
    </>
  );
}
