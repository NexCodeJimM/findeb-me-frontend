"use client";

import { Box, Text } from "@chakra-ui/react";

const PageHeader = ({ photo, title, desc }) => {
  return (
    <Box
      position="relative"
      minHeight={{ base: "50vh", sm: "40vh" }}
      backgroundImage={photo}
      backgroundPosition="center"
      backgroundSize="cover"
      backgroundAttachment="fixed"
    >
      {/* Tint */}
      <Box
        position="absolute"
        width="100%"
        height="100%"
        opacity="0.85"
        backgroundColor="gray.700"
      />

      {/* Content */}
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        maxWidth="1280px"
        position="absolute"
        color="white"
        fontWeight="light"
        left="0"
        right="0"
        bottom="0"
        top="0"
        margin="0 auto"
        padding="2rem"
      >
        {/* Top */}
        <Box width="100%" textAlign="center">
          <Text
            fontSize={{ base: "4xl", sm: "5xl" }}
            lineHeight="shorter"
            marginBottom="1.5rem"
            fontWeight="light"
            textTransform="uppercase"
            fontFamily="Aileron"
          >
            {title}
          </Text>

          <Text fontFamily="Roboto" fontSize={{ base: "lg", sm: "2xl" }}>
            {desc}
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default PageHeader;
