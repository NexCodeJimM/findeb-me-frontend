import { Box, Text } from "@chakra-ui/react";
import FeaturesList from "./FeaturesList/FeaturesList";

const Features = () => {
  return (
    <Box
      maxWidth="1280px"
      margin="0 auto"
      color="gray.600"
      paddingY={{ base: "3rem", sm: "6rem" }}
    >
      <Text
        fontSize={{ base: "3xl", sm: "4xl" }}
        lineHeight="shorter"
        fontWeight="light"
        paddingX="2rem"
      >
        We Offer A Wide Range Of Services
      </Text>

      <FeaturesList />
    </Box>
  );
};

export default Features;
