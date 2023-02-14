import * as React from "react";
// import { useState } from "react";
// import { styled } from "@mui/material/styles";
// import Paper from "@mui/material/Paper";
// import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { LayoutProps } from "./LayoutProps";
import { Breadcrumbs } from "../components"; //PrimarySearchAppBar
import { Container } from "@mui/material";
import { RequireAuth } from "../requireAuth/RequireAuth";
import { useRequireAuth } from "../requireAuth/useRequireAuth";

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
        {/* <PrimarySearchAppBar session={session} /> */}

        <Container maxWidth="xl">
          <Breadcrumbs />
          <Box
            sx={{
              mt: 2,
              display: "flex",
              flexWrap: "wrap",
              alignContent: "center",
              flexDirection: "column",
            }}>
            {children}
          </Box>
        </Container>
      </>
    </RequireAuth>
  );
}
