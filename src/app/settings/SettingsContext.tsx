import {createContext} from "react";
import {ISettingsContext} from "./ISettingsContext";
import {ThemeMode} from "./ThemeMode";

export const SettingsContext = createContext<ISettingsContext>({
    themeMode: ThemeMode.Dark,
    token: undefined // initially logged out
});
