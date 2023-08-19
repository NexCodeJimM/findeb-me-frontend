"use client";

import { Box, Text, Button, ButtonGroup, Image } from "@chakra-ui/react";
import Link from "next/link";

const HeroBanner = () => {
  return (
    // Main Container
    <Box
      position="relative"
      minHeight={{ base: "70vh", sm: "90vh" }}
      backgroundImage={`url('./assets/images/heroBg.jpeg')`}
      backgroundPosition="center"
      backgroundSize="cover"
      backgroundAttachment="fixed"
    >
      {/* Tint */}
      <Box
        position="absolute"
        width="100%"
        height="100%"
        opacity="0.9"
        backgroundColor="red.900"
      />

      {/* Content */}
      <Box
        display="flex"
        flexDirection={{ base: "column", sm: "row" }}
        // flexDirection="column"
        alignItems="center"
        justifyContent={{ base: "flex-start", sm: "space-between" }}
        // justifyContent="center"
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
        {/* Left */}
        <Box width="100%" textAlign="start">
          <Text
            fontSize={{ base: "4xl", sm: "5xl" }}
            lineHeight="shorter"
            marginBottom="1.5rem"
            fontWeight="light"
          >
            Your Partner in{" "}
            <span
              style={{
                fontWeight: "bold",
                bgGradient: "linear(to-l, #7928CA, #FF0080)",
              }}
            >
              Comprehensive Engineering
            </span>{" "}
            and{" "}
            <span
              style={{
                fontWeight: "bold",
              }}
            >
              Management Solutions
            </span>
          </Text>

          <Text fontSize={{ base: "lg", sm: "2xl" }}>
            Discover a Path to Collective Growth: From Precise Project Framing
            to Expert Cost Engineering.
          </Text>

          {/* Buttons */}
          <ButtonGroup marginTop="3rem">
            <Button
              padding="1.5rem"
              position="relative"
              bgGradient="linear(to-l, #f5b03d, #F9A61A, #f76d16 80%)"
              overflow="hidden"
              _before={{
                position: "absolute",
                content: `""`,
                width: "100%",
                height: "100%",
                bgGradient: "linear(to-r, #f5b03d, #F9A61A, #f76d16 80%)",
                transition: "1s",
              }}
              _hover={{
                _before: { opacity: 0 },
              }}
              _active={{
                bg: "#F9A61A",
              }}
            >
              <Text zIndex="1" color={"white"}>
                Read More
              </Text>
            </Button>
            <Button
              variant="outline"
              colorScheme="white"
              padding="1.5rem"
              _hover={{ bg: "white", color: "gray.800" }}
            >
              Work With Us
            </Button>
          </ButtonGroup>
        </Box>

        {/* Right */}
        <Box
          width="100%"
          padding="2rem"
          marginTop={{ base: "2rem", sm: "2rem" }}
          display="flex"
          justifyContent="center"
        >
          <Image
            src="/assets/images/headerphoto.png"
            alt="header-photo"
            display={{ base: "none", sm: "block" }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default HeroBanner;
