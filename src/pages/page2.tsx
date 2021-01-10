import { Text } from "@chakra-ui/react";
import { NextSeo } from "next-seo";

import { Container } from "../components/Container";
import { Footer } from "../components/Footer";
import { Hero } from "../components/Hero";
import { CTA } from "../components/Index/CTA";
import { Main } from "../components/Main";
import { Navbar } from "../components/Navbar/Navbar";

const Page2 = () => (
  <Container minHeight="100vh">
    <NextSeo title="next-lotus-starter | Page 2" />
    <Navbar />
    <Main>
      <Hero />
      <Text>Page 2 example.</Text>
      <CTA />
    </Main>
    <Footer>
      <Text>Next ❤️ Chakra</Text>
    </Footer>
  </Container>
);

export default Page2;
