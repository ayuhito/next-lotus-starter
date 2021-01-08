import { Box, Icon } from "@chakra-ui/react";
import { FiMenu as MenuIcon, FiX as CloseIcon } from "react-icons/fi";

export const MenuToggle = ({ toggle, isOpen }) => {
  return (
    <Box display={{ base: "block", md: "none" }} onClick={toggle}>
      {isOpen ? <Icon as={CloseIcon} /> : <Icon as={MenuIcon} />}
    </Box>
  );
};
