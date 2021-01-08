import { Box, BoxProps, Text } from "@chakra-ui/react";

export const Logo = (props: BoxProps) => {
  return (
    <Box {...props}>
      <Text fontSize="lg" fontWeight="bold">
        Logo
      </Text>
    </Box>
  );
};
