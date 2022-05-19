import { Flex, FlexProps } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { PropsWithChildren } from "react";

import { Footer } from "./Footer";
import { Navbar } from "./Navbar/Navbar";

export type PageContainerProps = PropsWithChildren<FlexProps>;

export const PageContainer = ({ children, ...props }: PageContainerProps) => {
  const { pathname } = useRouter();
  if (pathname === "/_error") return <>{children}</>;

  return (
    <Flex minHeight="100vh" overflowX="hidden" direction="column" {...props}>
      <Navbar />
      {children}
      <Footer />
    </Flex>
  );
};
