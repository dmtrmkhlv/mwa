import * as React from "react";
import { useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { LayoutProps } from "./LayoutProps";
import { Breadcrumbs, PrimarySearchAppBar } from "../components";
import { Container } from "@mui/material";
import { RequireAuth } from "../requireAuth/RequireAuth";
import { useRequireAuth } from "../requireAuth/useRequireAuth";

export default function Layout(props: LayoutProps): JSX.Element {
  const { session } = useRequireAuth();
  const { children, isRequire } = props;
  return (
    <RequireAuth isAuth={session} isRequire={isRequire}>
      <>
        <PrimarySearchAppBar />

        <Container maxWidth="xl">
          <Breadcrumbs />
          {session ? <h1>Зарегистрирован</h1> : <h1>Не зарегистрирован</h1>}
          <Box
            sx={{
              mt: 2,
              display: "flex",
              flexWrap: "wrap",
              alignContent: "center",
              flexDirection: "column",
            }}
          >
            {children}
          </Box>
        </Container>
      </>
    </RequireAuth>
  );
}
