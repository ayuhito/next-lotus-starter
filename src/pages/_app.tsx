import "@fontsource/poppins/400.css";
import "@fontsource/poppins/700.css";

import { ChakraProvider } from "@chakra-ui/react";
import { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";

import theme from "../theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <DefaultSeo
        title="next-lotus-starter"
        description="Personal starter template for my Next.js projects."
      />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
