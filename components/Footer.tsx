import { Flex, FlexProps, Text } from "@chakra-ui/react";

export const Footer = (props: FlexProps) => (
  <Flex
    as="footer"
    mt="auto"
    py={4}
    px={8}
    width="100%"
    justify={{ base: "center" }}
    zIndex={4}
    {...props}
  >
    <Text>Next ❤️ Chakra</Text>
  </Flex>
);
