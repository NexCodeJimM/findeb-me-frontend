import { Box, Text } from "@chakra-ui/react";
import WhyUsCards from "./WhyUsCards/WhyUsCards";

const WhyUs = () => {
  return (
    <Box marginY="5rem">
      <Box maxWidth="1280px" margin="0 auto">
        <Box
          fontSize={{ base: "3xl", sm: "4xl" }}
          lineHeight="shorter"
          color="gray.600"
          textAlign="center"
        >
          <Text textStyle="sectionHeader">Why Choose FINDEB?</Text>
        </Box>

        <WhyUsCards />
      </Box>
    </Box>
  );
};

export default WhyUs;
