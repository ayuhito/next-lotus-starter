import { Flex, FlexProps, Text } from "@chakra-ui/react";

export const Footer = (props: FlexProps) => (
  <Flex as="footer" py="8rem" {...props}>
    <Text>Next ❤️ Chakra</Text>
  </Flex>
);
