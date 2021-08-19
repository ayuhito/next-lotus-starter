import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import { createBreakpoints, mode } from "@chakra-ui/theme-tools";

const breakpoints = createBreakpoints({
  sm: "40em",
  md: "52em",
  lg: "64em",
  xl: "80em",
});

const config: ThemeConfig = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

const colors = {
  black: "#16161D",
};

const fonts = {
  heading: `'Poppins', sans-serif`,
  body: `'Poppins', sans-serif`,
};

const styles = {
  global: (props) => ({
    "html, body": {
      backgroundColor: mode("gray.50", "gray.900")(props),
      color: mode("black", "white")(props),
    },
  }),
};

const theme = extendTheme({
  breakpoints,
  colors,
  config,
  fonts,
  styles,
});

export default theme;
