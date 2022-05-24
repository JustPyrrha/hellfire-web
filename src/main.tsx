import React from "react"
import ReactDOM from "react-dom/client"
import {CssBaseline} from "@mui/material";
import HellfireApp from "./app/HellfireApp";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <React.Fragment>
        <CssBaseline />
        <HellfireApp />
    </React.Fragment>
  </React.StrictMode>
)
