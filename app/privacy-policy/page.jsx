"use client";
import PrivacyContent from "@/components/PrivacyPolicyPage/PrivacyContent";
import { Box, Text } from "@chakra-ui/react";

const PrivacyPolicy = () => {
  return (
    <Box maxWidth="1280px" margin="0 auto" padding="2rem">
      {/* Title and Date */}
      <Box marginBottom="1rem">
        <Text
          fontSize={{ base: "3xl", sm: "4xl" }}
          fontWeight="bold"
          color="gray.700"
        >
          Privacy Policy
        </Text>
        <Text fontSize="sm" color="#797979">
          Effective date: August 23, 2023
        </Text>
      </Box>

      <Box>
        <PrivacyContent />
      </Box>
    </Box>
  );
};

export default PrivacyPolicy;
