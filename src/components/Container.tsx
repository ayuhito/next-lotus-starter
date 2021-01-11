import { Flex, FlexProps, useColorModeValue } from "@chakra-ui/react";

export const Container = (props: FlexProps) => {
  const bgColor = useColorModeValue("gray.50", "gray.900");
  const color = useColorModeValue("black", "white");

  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="flex-start"
      bg={bgColor}
      color={color}
      {...props}
    />
  );
};
