import { Code, Link, List, Text } from "@chakra-ui/react";
import Head from "next/head";

import { Container } from "../components/Container";
import { CTA } from "../components/CTA";
import { Footer } from "../components/Footer";
import { Hero } from "../components/Hero";
import { ListItemCustom } from "../components/ListItemCustom";
import { Main } from "../components/Main";
import { Navbar } from "../components/Navbar/Navbar";

const Index = () => (
  <Container minHeight="100vh">
    <Head>
      <title>next-lotus-starter | Home</title>
    </Head>
    <Navbar />
    <Hero />
    <Main>
      <Text>
        Personal starter repository built using <Code>Next.js</Code> +{" "}
        <Code>Chakra UI</Code> + <Code>TypeScript</Code>. Based off
        Vercel&apos;s{" "}
        <Link
          isExternal
          to="https://github.com/vercel/next.js/tree/canary/examples/with-chakra-ui-typescript"
        >
          with-chakra-ui-typescript
        </Link>{" "}
        template.
      </Text>

      <List spacing={3} py={10} mt={0}>
        <ListItemCustom href="https://nextjs.org" title="Next.js" />
        <ListItemCustom href="https://chakra-ui.com/" title="Chakra UI" />
        <ListItemCustom
          href="https://www.typescriptlang.org/"
          title="TypeScript"
        />
        <ListItemCustom
          href="https://github.com/fontsource/fontsource"
          title="Fontsource"
        />
        <ListItemCustom
          href="https://react-icons.github.io/react-icons"
          title="React Icons"
        />
        <ListItemCustom href="https://prettier.io/" title="Prettier" />
        <ListItemCustom href="https://eslint.org/" title="ESLint" />
      </List>
      <CTA />
    </Main>
    <Footer>
      <Text>Next ❤️ Chakra</Text>
    </Footer>
  </Container>
);

export default Index;
