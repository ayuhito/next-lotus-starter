import { Flex, FlexProps } from "@chakra-ui/react";
import { PropsWithChildren } from "react";

import { Footer } from "./Footer";
import { Navbar } from "./Navbar/Navbar";

export type PageContainerProps = PropsWithChildren<FlexProps>;

export const PageContainer = ({ children, ...props }: PageContainerProps) => {
  return (
    <Flex minHeight="100vh" overflowX="hidden" direction="column" {...props}>
      <Navbar />
      {children}
      <Footer />
    </Flex>
  );
};
