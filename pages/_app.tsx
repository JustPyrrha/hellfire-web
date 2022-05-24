import type { AppProps } from "next/app";
import * as React from "react";
import "../styles/globals.css";

function HellfireApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default HellfireApp
