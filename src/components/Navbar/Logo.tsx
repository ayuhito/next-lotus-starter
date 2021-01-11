import { Box, BoxProps, useColorModeValue } from "@chakra-ui/react";
import Image from "next/image";

export const Logo = (props: BoxProps) => {
  const logoURL = useColorModeValue("/lotus-logo-d.svg", "/lotus-logo-w.svg");

  return (
    <Box {...props}>
      <Image src={logoURL} alt="Logo" height={60} width={80} />
    </Box>
  );
};
