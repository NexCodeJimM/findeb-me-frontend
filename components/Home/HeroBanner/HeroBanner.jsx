"use client";

import { Box, Text, Button } from "@chakra-ui/react";
import Link from "next/link";

const HeroBanner = () => {
  return (
    // Main Container
    <Box
      position="relative"
      minHeight={{ base: "70vh", sm: "80vh" }}
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
        opacity="0.85"
        backgroundColor="red.700"
      />

      {/* Content */}
      <Box
        display="flex"
        // flexDirection={{ base: "column", sm: "row" }}
        flexDirection="column"
        alignItems="center"
        // justifyContent={{ base: "flex-start", sm: "space-between" }}
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
          >
            Your Partner in{" "}
            <span
              style={{
                fontWeight: "bold",
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
        </Box>

        {/* Bottom */}
        <Box
          width="100%"
          padding="2rem"
          color="gray.700"
          marginTop={{ base: "2rem", sm: "2rem" }}
          display="flex"
          justifyContent="center"
        >
          <Box display="flex" marginX="0.5rem" gap="1rem">
            <Link href="/services">
              <Button
                padding="1.5rem"
                borderRadius="sm"
                backgroundColor="#F9A61A"
                color="white"
                _hover={{ backgroundColor: "#C77F05" }}
              >
                Read More
              </Button>
            </Link>

            <Link href="/contact">
              <Button
                padding="1.5rem"
                borderRadius="sm"
                variant="outline"
                color="#F9A61A"
              >
                Work With Us
              </Button>
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default HeroBanner;
