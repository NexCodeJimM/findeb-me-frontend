import { Box, Text } from "@chakra-ui/react";
import FeaturedProjectSlider from "./FeaturedProjectSlider/FeaturedProjectSlider";

const FeaturedProject = () => {
  return (
    <Box backgroundColor="gray.100">
      <Box maxWidth="1280px" padding="2rem" margin="0 auto">
        <Text
          fontSize={{ base: "3xl", sm: "4xl" }}
          lineHeight="shorter"
          fontWeight="light"
          paddingX="2rem"
          color="gray.600"
          textAlign="center"
          marginBottom="2rem"
        >
          Featured Projects
        </Text>

        {/* Featured Projects */}
        <FeaturedProjectSlider />
      </Box>
    </Box>
  );
};

export default FeaturedProject;
