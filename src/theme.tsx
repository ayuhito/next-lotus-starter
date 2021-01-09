import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";

const breakpoints = createBreakpoints({
  sm: "40em",
  md: "52em",
  lg: "64em",
  xl: "80em",
});

const config = {
  useSystemColorMode: true,
  initialColorMode: "dark",
};

const fonts = {
  heading: `'Poppins', sans-serif`,
  body: `'Poppins', sans-serif`,
};

const theme = extendTheme({
  breakpoints,
  colors: {
    black: "#16161D",
  },
  config,
  fonts,
});

export default theme;
