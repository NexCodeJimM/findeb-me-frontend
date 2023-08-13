import { Box, Text, Flex, Image } from "@chakra-ui/react";
import { Features } from "../featuresConsts";

const FeaturesList = () => {
  return (
    <Box maxWidth="1280px" padding="2rem" marginTop="3rem">
      <Flex flexDirection="column">
        {Features.map((item, index) => (
          <FeaturesLists key={item} {...item} index={index} />
        ))}
      </Flex>
    </Box>
  );
};

export default FeaturesList;

const FeaturesLists = ({ title, photo, description, index }) => {
  const isEvenIndex = index % 2 === 0; // Check if index is even
  const flexDirection = isEvenIndex ? "row" : "row-reverse"; // Alternate flex direction

  return (
    <Flex
      flexDirection={{ base: "column", sm: flexDirection }}
      marginBottom={{ base: "0.5rem", sm: "5rem" }}
      alignItems={{ base: "center", sm: "flex-start" }}
      gap={{ base: "1rem", sm: "3rem" }}
    >
      <Box width={{ base: "20rem", sm: "100%" }}>
        <Image src={photo} alt={title} width="100%" borderRadius="md" />
      </Box>

      <Box
        marginLeft={{ base: "0", sm: "3rem" }}
        marginTop={{ base: "1.5rem", sm: "0" }}
        marginBottom={{ base: "2.5rem", sm: "0" }}
      >
        <Text
          fontSize={{ base: "2xl", sm: "3xl" }}
          color="#F9A61A"
          fontWeight="medium"
        >
          {title}
        </Text>
        <Text marginTop="1rem">{description}</Text>
      </Box>
    </Flex>
  );
};
