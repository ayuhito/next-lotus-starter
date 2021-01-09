import "@fontsource/poppins/400.css";
import "@fontsource/poppins/700.css";

import { ChakraProvider } from "@chakra-ui/react";
import { AppProps } from "next/app";
import Head from "next/head";

import theme from "../theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
