import { Text } from "@chakra-ui/react";
import Head from "next/head";

import { Container } from "../components/Container";
import { Footer } from "../components/Footer";
import { Hero } from "../components/Hero";
import { CTA } from "../components/Index/CTA";
import { Main } from "../components/Main";
import { Navbar } from "../components/Navbar/Navbar";

const Page2 = () => (
  <Container minHeight="100vh">
    <Head>
      <title>next-lotus-starter | Page 2</title>
    </Head>
    <Navbar />
    <Main>
      <Hero />
      <Text pb="4rem">Page 2 example.</Text>
      <CTA />
    </Main>
    <Footer />
  </Container>
);

export default Page2;
