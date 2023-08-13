"use client";
import { Box, Flex, Text } from "@chakra-ui/react";

const ErrorComponent = () => {
  return (
    <Box maxWidth="1280px" margin="0 auto" padding="2rem">
      <Flex
        backgroundColor="#F1F1F1"
        paddingY="2rem"
        paddingX="4rem"
        borderRadius="xl"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        marginY="10rem"
      >
        <Text fontWeight="bold" fontSize={{ base: "xl", sm: "3xl" }}>
          This Page Is Under Construction
        </Text>

        <Text fontSize={{ base: "md", sm: "xl" }} marginY="4rem">
          We're still working on our projects. You can check this page again
          next time.
        </Text>
      </Flex>
    </Box>
  );
};

export default ErrorComponent;
