import {
  Box,
  Button,
  ButtonProps,
  Flex,
  FlexProps,
  HStack,
  Stack,
  StackProps,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import Image from "next/image";
import { PropsWithChildren } from "react";

import { NextChakraLink } from "../NextChakraLink";
import { DarkModeSwitch } from "./DarkModeSwitch";
import { MobileNavButton, MobileNavContent } from "./MobileNav";

export const Logo = (props: ButtonProps) => {
  const logoURL = useColorModeValue("/lotus-logo-d.svg", "/lotus-logo-w.svg");

  return (
    <NextChakraLink href="/">
      <Button width="100%" size="lg" variant="ghost" colorScheme="gray" p={8} mx={2} {...props}>
        <Image src={logoURL} alt="Logo" layout="fill" objectFit="contain" priority={true} />
      </Button>
    </NextChakraLink>
  );
};

type NavbarContainerProps = PropsWithChildren<FlexProps>;

const NavbarContainer = ({ children, ...props }: NavbarContainerProps) => {
  return (
    <Flex as="nav" align="center" justify="space-between" wrap="wrap" w="100%" p={8} {...props}>
      {children}
    </Flex>
  );
};

interface MenuItemToProp {
  to: string;
}

type MenuItemProps = PropsWithChildren<ButtonProps & MenuItemToProp>;

export const MenuItem = ({ children, to = "/", ...props }: MenuItemProps) => {
  return (
    <NextChakraLink href={to} px={1}>
      <Button size="md" fontWeight="600" width="100%" variant="ghost" colorScheme="gray" {...props}>
        {children}
      </Button>
    </NextChakraLink>
  );
};

export const MenuStack = (props: StackProps) => (
  <Stack spacing={{ base: 0, lg: 4 }} align="center" justify="flex-end" {...props}>
    <HStack pb={{ base: 4, lg: 0 }}>
      <MenuItem to="/">Home</MenuItem>
      <MenuItem to="/page2">Page 2</MenuItem>
      <MenuItem variant="outline" to="https://github.com/DecliningLotus/next-lotus-starter">
        GitHub
      </MenuItem>
    </HStack>
    <HStack>
      <DarkModeSwitch />
    </HStack>
  </Stack>
);

export const Navbar = (props) => {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <>
      <NavbarContainer {...props}>
        <Logo />
        <Box display={{ base: "none", lg: "block" }} flexBasis={{ base: "100%", lg: "auto" }}>
          <MenuStack direction="row" />
        </Box>
        <MobileNavButton aria-label="Navigation" onToggle={onToggle} isOpen={isOpen} />
      </NavbarContainer>
      <MobileNavContent isOpen={isOpen} onToggle={onToggle} />
    </>
  );
};
