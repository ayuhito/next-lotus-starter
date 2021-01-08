import { Flex, FlexProps } from "@chakra-ui/react";
import { useState } from "react";

import { Logo } from "./Logo";
import { MenuLinks } from "./MenuLinks";
import { MenuToggle } from "./MenuToggle";

export const Navbar = (props: FlexProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <NavbarContainer {...props}>
      <Logo w="100px" color={["white", "white", "gray.50", "gray.50"]} />
      <MenuToggle toggle={toggle} isOpen={isOpen} />
      <MenuLinks isOpen={isOpen} />
    </NavbarContainer>
  );
};

const NavbarContainer = ({ children, ...props }) => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      p={8}
      bg={["transparent", "transparent", "transparent", "transparent"]}
      color={["white", "white", "white", "white"]}
      {...props}
    >
      {children}
    </Flex>
  );
};
