import { Box, Text, Flex, Image } from "@chakra-ui/react";
import { Features } from "../featuresConsts";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const FeaturesList = () => {
  return (
    <Box maxWidth="1280px" padding="2rem" marginTop="3rem">
      <Flex flexDirection="column">
        {Features.map((item, index) => (
          <FeaturesLists key={index} {...item} index={index} />
        ))}
      </Flex>

      <Box display="flex" alignItems="center" justifyContent="center">
        <Link href="/services">
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
            padding={{ base: "0.5rem 1rem", sm: "1rem 2rem" }}
            rounded="lg"
            color="white"
          >
            <Text
              textStyle="button"
              letterSpacing="0.1rem"
              fontSize={{ base: "sm", sm: "md" }}
            >
              See All Services
            </Text>

            <FaArrowRight />
          </Box>
        </Link>
      </Box>
    </Box>
  );
};

export default FeaturesList;

const FeaturesLists = ({ title, photo, description, index }) => {
  const isEvenIndex = index % 2 === 0;
  const flexDirection = isEvenIndex ? "row" : "row-reverse";

  return (
    <Flex
      flexDirection={{ base: "column", sm: flexDirection }}
      marginBottom={{ base: "0.5rem", sm: "5rem" }}
      alignItems={{ base: "center", sm: "flex-start" }}
      gap={{ base: "1rem", sm: "2rem" }}
      justifyContent="space-between"
    >
      <Box
        width={{ base: "20rem", sm: "100rem" }}
        height={{ base: "15rem", sm: "20rem" }}
      >
        <Image
          src={photo}
          alt={title}
          width="100%"
          height="100%"
          borderRadius="md"
          objectFit="cover"
          loading="eager"
        />
      </Box>

      <Box
        marginLeft={{ base: "0", sm: "3rem" }}
        marginTop={{ base: "1.5rem", sm: "0" }}
        marginBottom={{ base: "2.5rem", sm: "0" }}
      >
        <Text
          fontSize={{ base: "xl", sm: "3xl" }}
          textStyle="sectionHeader"
          fontWeight="semibold"
          color="#F9A61A"
        >
          {title}
        </Text>
        <Text
          marginTop="1rem"
          fontFamily="Roboto"
          fontSize={{ base: "sm", sm: "md" }}
        >
          {description}
        </Text>
      </Box>
    </Flex>
  );
};
