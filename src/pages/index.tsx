import {
  Code,
  Icon,
  Link as ChakraLink,
  List,
  ListIcon,
  ListItem,
  Text,
} from "@chakra-ui/react";
import { AiFillCheckCircle, AiOutlineLink } from "react-icons/ai";

import { Container } from "../components/Container";
import { CTA } from "../components/CTA";
import { Footer } from "../components/Footer";
import { Hero } from "../components/Hero";
import { Main } from "../components/Main";
import { Navbar } from "../components/Navbar/Navbar";

const Index = () => (
  <Container minHeight="100vh">
    <Navbar />
    <Hero />
    <Main>
      <Text>
        Example repository of <Code>Next.js</Code> + <Code>chakra-ui</Code> +{" "}
        <Code>typescript</Code>.
      </Text>

      <List spacing={3} my={0}>
        <ListItem>
          <ListIcon as={AiFillCheckCircle} color="green.500" />
          <ChakraLink
            isExternal
            href="https://chakra-ui.com"
            flexGrow={1}
            mr={2}
          >
            Chakra UI <Icon as={AiOutlineLink} />
          </ChakraLink>
        </ListItem>
        <ListItem>
          <ListIcon as={AiFillCheckCircle} color="green.500" />
          <ChakraLink isExternal href="https://nextjs.org" flexGrow={1} mr={2}>
            Next.js <Icon as={AiOutlineLink} />
          </ChakraLink>
        </ListItem>
      </List>
    </Main>
    <Footer>
      <Text>Next ❤️ Chakra</Text>
    </Footer>
    <CTA />
  </Container>
);

export default Index;
