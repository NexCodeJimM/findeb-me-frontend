import { Box, Button, Flex, Text, Center } from "@chakra-ui/react";
import { FaPhoneAlt } from "react-icons/fa";
import Link from "next/link";

const CallToAction = () => {
  return (
    <Box
      backgroundColor="#f1f1f1"
      position="relative"
      backgroundImage={`url('./assets/images/beyond-boundaries.jpg')`}
      backgroundSize="cover"
      backgroundPosition="top"
      minHeight={{ base: "60vh", sm: "70vh" }}
    >
      <Box
        position="absolute"
        width="100%"
        height="100%"
        opacity="0.90"
        backgroundColor="gray.900"
      />
      <Box
        maxWidth="1280px"
        padding={{ base: "2rem", sm: "5rem" }}
        margin="0 auto"
        color="white"
        position="absolute"
        left="0"
        right="0"
        bottom="0"
        top="0"
        justifyContent="center"
        alignItems="center"
        textAlign="center"
      >
        <Text
          fontFamily="Roboto"
          fontSize={{ base: "xs", sm: "lg" }}
          marginBottom={{ base: "1rem", sm: "2rem" }}
        >
          Join us on a journey that transcends boundaries, redefines industries,
          and shapes the future.
        </Text>

        <Text
          fontFamily="Aileron"
          fontWeight="bold"
          fontSize={{ base: "2xl", md: "5xl" }}
          letterSpacing="0.3rem"
          marginBottom={{ base: "1rem", sm: "2rem" }}
          textTransform="uppercase"
        >
          Beyond Boundaries, Into Excellence
        </Text>

        <Text
          fontFamily="Roboto"
          fontSize={{ base: "xs", sm: "lg" }}
          marginBottom={{ base: "1rem", sm: "2rem" }}
        >
          At FINDEB, we're not just building structures; we're building
          legacies, fostering knowledge, and empowering change-makers. Welcome
          to a world where expertise knows no limits, and possibilities are
          boundless.
        </Text>

        <Center>
          <Link href="/contact">
            <Box
              backgroundColor="#F9A61A"
              padding="1rem 2rem"
              rounded="lg"
              display="flex"
              justifyContent="center"
              alignItems="center"
              gap="3"
              transition="0.3s ease-in-out"
              _hover={{
                backgroundColor: "#C77F05",
              }}
              marginTop={{ base: "2rem", sm: "1rem" }}
            >
              <FaPhoneAlt />
              <Text textStyle="button" fontSize={{ base: "sm", sm: "lg" }}>
                Contact Us
              </Text>
            </Box>
          </Link>
        </Center>
      </Box>
    </Box>
  );
};

export default CallToAction;
