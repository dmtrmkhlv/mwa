import * as React from "react";
import { useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { LayoutProps } from "./LayoutProps";
import { Header, Footer } from "../components";
import { Container, useTheme } from "@mui/material";
import { RequireAuth } from "../requireAuth/RequireAuth";
import { useRequireAuth } from "../requireAuth/useRequireAuth";
import { CustomeDrawer, DrawerHeader } from "../components/DrawerEvent/Drawer";

export default function Layout(props: LayoutProps): JSX.Element {
  const { session } = useRequireAuth();
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
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
        <Header session={session} open={open} setOpen={setOpen} />
        {session ? <CustomeDrawer open={open} setOpen={setOpen} /> : <></>}
        <Box component="main" sx={{ flexGrow: 1, p: 1 }}>
          <DrawerHeader />
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
          </Container>
        </Box>

        <Footer />
      </>
    </RequireAuth>
  );
}
