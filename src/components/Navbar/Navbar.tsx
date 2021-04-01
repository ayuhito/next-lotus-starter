import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Collapse,
  Flex,
  IconButton,
  Link,
  Spacer,
  Stack,
  Text,
  TextProps,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";

import { NextChakraLink } from "../NextChakraLink";
import { DarkModeSwitch } from "./DarkModeSwitch";

export const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure();

  const borderColor = useColorModeValue("gray.200", "gray.900");

  return (
    <Box as="header">
      <Flex
        as="nav"
        minHeight="60px"
        width="100%"
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle="solid"
        borderColor={borderColor}
        align="center"
        justify="space-between"
        wrap="wrap"
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? (
                <CloseIcon width={3} height={3} />
              ) : (
                <HamburgerIcon width={5} height={5} />
              )
            }
            variant="ghost"
            aria-label="Toggle Navigation"
          />
        </Flex>
        <Flex flex={{ base: 1 }}>
          <Text
            textAlign={{
              base: "center",
              md: "left",
            }}
          >
            Logo
          </Text>
          <Spacer />
          <Flex display={{ base: "none", md: "flex" }} ml={10}>
            <DesktopNav />
          </Flex>
          <DarkModeSwitch />
        </Flex>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
};

const DesktopNav = () => {
  return (
    <Box flexBasis={{ base: "100%", md: "auto" }}>
      <Stack
        spacing={8}
        align="center"
        justify={["center", "space-between", "flex-end", "flex-end"]}
        direction={["column", "row", "row", "row"]}
        pt={[4, 4, 0, 0]}
      >
        {NAV_ITEMS.map((navItem) => (
          <DesktopNavItem
            key={navItem.label}
            label={navItem.label}
            href={navItem.href}
          />
        ))}
      </Stack>
    </Box>
  );
};

const DesktopNavItem = ({ label, href, rest }: NavItem) => {
  return (
    <NextChakraLink href={href}>
      <Text display="block" {...rest}>
        {label}
      </Text>
    </NextChakraLink>
  );
};

const MobileNav = () => {
  return (
    <Stack p={4} display={{ md: "none" }}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, href }: NavItem) => {
  return (
    <Stack spacing={4}>
      <Flex
        py={2}
        as={Link}
        href={href ?? "#"}
        justify="space-between"
        align="center"
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text fontWeight="600">{label}</Text>
      </Flex>
    </Stack>
  );
};

interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
  rest?: TextProps;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Inspiration",
    href: "#",
  },
  {
    label: "Learn Design",
    href: "#",
  },
  {
    label: "Hire Designers",
    href: "#",
  },
];
