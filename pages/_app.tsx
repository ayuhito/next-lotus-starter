import "@fontsource/poppins/400.css";
import "@fontsource/poppins/700.css";
import "@fontsource/roboto-mono/variable.css";

import { ChakraProvider } from "@chakra-ui/react";
import { AppProps } from "next/app";
import Head from "next/head";

import { PageContainer } from "../components/PageContainer";
import theme from "../config/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <PageContainer>
        <Component {...pageProps} />
      </PageContainer>
    </ChakraProvider>
  );
}

export default MyApp;
