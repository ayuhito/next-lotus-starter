import { FlexProps } from "@chakra-ui/react";
import { PropsWithChildren } from "react";

import { Container } from "./Container";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar/Navbar";

export type PageContainerProps = PropsWithChildren<FlexProps>;

export const PageContainer = ({ children, ...props }: PageContainerProps) => {
  return (
    <Container minHeight="100vh" {...props}>
      <Navbar />
      {children}
      <Footer />
    </Container>
  );
};
