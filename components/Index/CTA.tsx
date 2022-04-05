import { Flex, Button, Link as ChakraLink } from "@chakra-ui/react";

export const CTA = () => (
  <Flex flexDirection="row" alignSelf="center" width="100%" maxWidth="48rem" py={2}>
    <ChakraLink isExternal href="https://nextjs.org/" flexGrow={1} mx={2}>
      <Button width="100%" variant="outline" colorScheme="green">
        Next.js
      </Button>
    </ChakraLink>

    <ChakraLink
      isExternal
      href="https://github.com/DecliningLotus/next-lotus-starter"
      flexGrow={2}
      mx={2}
    >
      <Button width="100%" variant="solid" colorScheme="green">
        View Repo
      </Button>
    </ChakraLink>
  </Flex>
);
