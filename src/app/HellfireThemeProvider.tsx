import React, {useEffect, useState} from "react";
import {createTheme, PaletteMode, ThemeProvider, useMediaQuery} from "@mui/material";
import {ThemeMode} from "./settings";
import {SettingsContext} from "./settings/SettingsContext";

interface IHellfireThemeProviderProps {
    children?: React.ReactNode
}

const HellfireThemeProvider = (props: IHellfireThemeProviderProps) => {
    const context = React.useContext(SettingsContext);
    const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
    const [mode, setMode] = useState<PaletteMode>("dark")
    useEffect(() => {
        switch (context.themeMode) {
            case ThemeMode.Light:
                setMode("light")
                break;
            case ThemeMode.Dark:
                setMode("dark")
                break;
            case ThemeMode.System:
                setMode(prefersDarkMode ? "dark" : "light");
                break;
        }
    }, [prefersDarkMode, context.themeMode]);

    const theme = createTheme({
        palette: {
            mode: mode
        }
    });

    return (
        <React.Fragment>
            <ThemeProvider theme={theme}>
                {props.children}
            </ThemeProvider>
        </React.Fragment>
    )
}

export default HellfireThemeProvider;