import * as React from "react";
import { useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { LayoutProps } from "./LayoutProps";
import {
  Breadcrumbs,
  DrawerAppBar,
  Footer,
  PrimarySearchAppBar,
} from "../components";
import { Container } from "@mui/material";
import { RequireAuth } from "../requireAuth/RequireAuth";
import { useRequireAuth } from "../requireAuth/useRequireAuth";
import { Header } from "../components/Header/Header";

export default function Layout(props: LayoutProps): JSX.Element {
  const { session } = useRequireAuth();
  const { children, isRequire } = props;
  const getRequireBoolean = () => {
    if (isRequire === "protected") {
      return true;
    } else if (isRequire === "public") {
      return false;
    }
    return false;
  };
  return (
    <RequireAuth isAuth={session} isRequire={getRequireBoolean()}>
      <>
        {session ? <PrimarySearchAppBar session={session} /> : <DrawerAppBar />}

        <Container maxWidth="xl">
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
          <Footer />
        </Container>
      </>
    </RequireAuth>
  );
}
