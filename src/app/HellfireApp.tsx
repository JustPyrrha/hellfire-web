import {Alert, Box, ThemeProvider} from "@mui/material";
import React from "react";
import HellfireAppBar from "./components/HellfireAppBar/HellfireAppBar";
import HellfireThemeProvider from "./HellfireThemeProvider";
import HellfireFooter from "./components/HellfireFooter/HellfireFooter";

const HellfireApp = () => {
    return (
        <React.Fragment>
            <HellfireThemeProvider>
                <Alert sx={{ borderRadius: 0 }} severity="warning">This site is still under active development, some bugs are to be expected amd some features will be missing.</Alert>
                <HellfireAppBar />
                {/* todo(@JustPyrrha, 24/05/2022): remove when page is actually done lmao */}
                <Box sx={{
                    height: "100vh"
                }}/>
                <HellfireFooter />
            </HellfireThemeProvider>
        </React.Fragment>
    )
}

export default HellfireApp;