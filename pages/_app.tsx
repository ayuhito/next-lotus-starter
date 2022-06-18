import "@fontsource/poppins/400.css";
import "@fontsource/poppins/700.css";
import "@fontsource/roboto-mono/variable.css";

import { ThemeProvider } from "next-themes";
import { AppProps } from "next/app";
import Head from "next/head";

import { darkTheme, globalStyles } from "@config/theme";

function MyApp({ Component, pageProps }: AppProps) {
  globalStyles();
  return (
    <ThemeProvider
      defaultTheme="system"
      attribute="class"
      value={{
        light: "light",
        dark: darkTheme.className,
      }}
    >
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
