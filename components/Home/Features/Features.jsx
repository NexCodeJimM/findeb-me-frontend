import { Box, Text } from "@chakra-ui/react";
import FeaturesList from "./FeaturesList/FeaturesList";

const Features = () => {
  return (
    <Box
      maxWidth="1280px"
      margin="0 auto"
      color="gray.600"
      paddingY={{ base: "3rem", sm: "6rem" }}
      paddingX={{ base: "1rem", sm: "2rem" }}
    >
      <Text
        fontSize={{ base: "3xl", sm: "4xl" }}
        textStyle="sectionHeader"
        lineHeight="shorter"
        paddingX="2rem"
        textAlign="center"
      >
        We Offer A Wide Range Of Services
      </Text>

      <Text
        textStyle="sectionBody"
        textAlign={{ base: "start", sm: "center" }}
        marginTop="1rem"
        fontSize={{ base: "sm", sm: "md" }}
      >
        FINDEB shapes the world with innovative design, architecture,
        engineering, and project management across diverse industries
      </Text>

      <FeaturesList />
    </Box>
  );
};

export default Features;
