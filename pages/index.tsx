import type { NextPage } from "next"
import * as React from "react";
import {Alert, Box} from "@mui/material";
import HellfireAppBar from "../src/components/HellfireAppBar/HellfireAppBar";
import HellfireFooter from "../src/components/HellfireFooter/HellfireFooter";
import HellfireThemeProvider from "../src/components/HellfireThemeProvider";

const Home: NextPage = () => {
  return (
    <main>
      <HellfireThemeProvider>
        <Alert sx={{ borderRadius: 0 }} severity="warning">This site is still under active development, some bugs are to be expected amd some features will be missing.</Alert>
        <HellfireAppBar />
        {/* todo(@JustPyrrha, 24/05/2022): remove when page is actually done lmao */}
        <Box sx={{
          height: "100vh"
        }}/>
        <HellfireFooter />
      </HellfireThemeProvider>
    </main>
  )
}

export default Home
