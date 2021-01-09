import { Box, CloseButton, Icon } from "@chakra-ui/react";
import { FiMenu as MenuIcon } from "react-icons/fi";

export const MenuToggle = ({ toggle, isOpen }) => {
  return (
    <Box display={{ base: "block", md: "none" }} onClick={toggle}>
      {isOpen ? <Icon as={CloseButton} /> : <Icon as={MenuIcon} />}
    </Box>
  );
};
