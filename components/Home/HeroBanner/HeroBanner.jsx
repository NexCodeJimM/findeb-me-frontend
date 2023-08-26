"use client";

import { Box, Text, Image, Center } from "@chakra-ui/react";
import Link from "next/link";
import { FaPhone } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const HeroBanner = () => {
  return (
    // Main Container
    <Box
      minHeight={{ base: "85vh", sm: "90vh" }}
      position="relative"
      backgroundColor="#F1F1F1"
      overflow="hidden"
    >
      <Box
        display="flex"
        flexDirection={{ base: "column", sm: "row" }}
        alignItems="center"
        justifyContent={{ base: "flex-start", sm: "space-between" }}
        maxWidth="1280px"
        position="absolute"
        left="0"
        right="0"
        bottom="0"
        top="0"
        margin="0 auto"
        padding="2rem"
      >
        {/* Left */}
        <Box flex="1">
          <Text
            fontSize={{ base: "3xl", sm: "6xl" }}
            textStyle="h1"
            letterSpacing="0.2rem"
            color="gray.700"
          >
            Your Partner in{" "}
            <strong
              style={{
                backgroundClip: "text",
                WebkitBackgroundClip: "text", // For Safari compatibility
                color: "transparent",
                backgroundImage: "linear-gradient(to right, #ff512f, #f09819)",
              }}
            >
              Comprehensive Engineering
            </strong>{" "}
            and{" "}
            <strong
              style={{
                backgroundClip: "text",
                WebkitBackgroundClip: "text", // For Safari compatibility
                color: "transparent",
                backgroundImage:
                  "linear-gradient(to right, #D4145A  , #FBB03B)",
              }}
            >
              Management Solutions
            </strong>
          </Text>

          <Text
            fontSize={{ base: "sm", sm: "lg" }}
            marginTop={{ base: "1rem", sm: "2rem" }}
            textStyle="body"
          >
            Discover a Path to Collective Growth: From Precise Project Framing
            to Expert Cost Engineering.
          </Text>

          <Box
            display="flex"
            gap={{ base: "1rem", sm: "2rem" }}
            marginTop={{ base: "2rem", sm: "4rem" }}
          >
            <Link href="/about-us">
              <Box
                display="flex"
                alignItems="center"
                justifyItems="center"
                gap="1rem"
                backgroundColor="#F9A61A"
                transition="0.3s ease-in-out"
                _hover={{
                  backgroundColor: "#C77F05",
                }}
                padding={{ base: "0.5rem 1rem", sm: "1rem" }}
                color="white"
                rounded="lg"
              >
                <Text
                  textStyle="button"
                  letterSpacing="0.1rem"
                  fontSize={{ base: "sm", sm: "md" }}
                >
                  Learn More
                </Text>
                <FaArrowRight />
              </Box>
            </Link>

            <Link href="/contact">
              <Box
                display="flex"
                alignItems="center"
                justifyItems="center"
                gap="1rem"
                backgroundColor="blackAlpha.50"
                transition="0.3s ease-in-out"
                _hover={{
                  backgroundColor: "blackAlpha.100",
                }}
                padding={{ base: "0.5rem 1rem", sm: "1rem" }}
                rounded="lg"
                color="gray.700"
              >
                <Text
                  textStyle="button"
                  letterSpacing="0.1rem"
                  fontSize={{ base: "sm", sm: "md" }}
                >
                  Get in Touch
                </Text>
                <FaPhone />
              </Box>
            </Link>
          </Box>
        </Box>

        {/* Right */}
        <Box flex="1" position="relative">
          <Center>
            <Box
              width={{ base: "70%", sm: "100%" }}
              position="relative"
              zIndex="5"
              opacity="1"
            >
              <Image
                width="100%"
                height="100%"
                src="/assets/images/header-new.png"
                alt="header-image"
                loading="eager"
              />
            </Box>
          </Center>

          <Box
            width={{ base: "100%", sm: "150%" }}
            height="150%"
            position="absolute"
            left="0"
            top="0"
            right="0"
            bottom="0"
            zIndex="4"
            display="flex"
            justifyContent="center"
            alignItems="center"
            opacity="0.3"
          >
            {/* <Image width="100%" height="100%" src="/assets/svg/blob.svg" /> */}
            <svg viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <clipPath id="a">
                  <path
                    fill="currentColor"
                    d="M832.5 613Q726 726 613 790.5T409.5 768Q319 681 174 590.5t-49-230Q221 221 360.5 233t270 9Q761 239 850 369.5T832.5 613Z"
                  />
                </clipPath>
              </defs>
              <g clip-path="url(#a)">
                <path
                  fill="#ec3030"
                  d="M832.5 613Q726 726 613 790.5T409.5 768Q319 681 174 590.5t-49-230Q221 221 360.5 233t270 9Q761 239 850 369.5T832.5 613Z"
                />
              </g>
            </svg>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default HeroBanner;
