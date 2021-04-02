import {
  Box,
  BoxProps,
  Button,
  Flex,
  FlexProps,
  Stack,
  StackProps,
  Text,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import Image from "next/image";

import { NextChakraLink } from "../NextChakraLink";
import { DarkModeSwitch } from "./DarkModeSwitch";
import { MobileNavButton, MobileNavContent } from "./MobileNav";

export const Logo = (props: BoxProps) => {
  const logoURL = useColorModeValue("/lotus-logo-d.svg", "/lotus-logo-w.svg");

  return (
    <NextChakraLink href="/">
      <Box boxSize="65px" position="relative" {...props}>
        <Image
          src={logoURL}
          alt="Logo"
          layout="fill"
          objectFit="contain"
          priority={true}
        />
      </Box>
    </NextChakraLink>
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
      {...props}
    >
      {children}
    </Flex>
  );
};

export const MenuItem = ({ children, to = "/", ...rest }) => {
  return (
    <NextChakraLink href={to}>
      <Text display="block" {...rest}>
        {children}
      </Text>
    </NextChakraLink>
  );
};

export const MenuStack = (props: StackProps) => (
  <Stack spacing={8} align="center" justify="flex-end" {...props}>
    <MenuItem to="/">Home</MenuItem>
    <MenuItem to="/page2">Page 2</MenuItem>
    <MenuItem to="https://github.com/DecliningLotus/next-lotus-starter">
      <Button size="sm" rounded="md" variant="outline" colorScheme="black">
        GitHub
      </Button>
    </MenuItem>
    <DarkModeSwitch />
  </Stack>
);

export const Navbar = (props: FlexProps) => {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <>
      <NavbarContainer {...props}>
        <Logo />
        <Box
          display={{ base: "none", md: "block" }}
          flexBasis={{ base: "100%", md: "auto" }}
        >
          <MenuStack direction="row" />
        </Box>
        <MobileNavButton
          aria-label="Navigation"
          onToggle={onToggle}
          isOpen={isOpen}
        />
      </NavbarContainer>
      <MobileNavContent isOpen={isOpen} onToggle={onToggle} />
    </>
  );
};
