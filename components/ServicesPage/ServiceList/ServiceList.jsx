import {
  Flex,
  Box,
  Image,
  Text,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import { serviceLists } from "./serviceConsts";

const ServiceList = () => {
  return (
    <Flex flexDirection="column" marginTop="4rem">
      {serviceLists.map((item, index) => (
        <ServicesListing key={index} {...item} reverse={index % 2 === 1} />
      ))}
    </Flex>
  );
};

const ServicesListing = ({ title, photo, tasks, reverse }) => {
  return (
    <Flex
      flexDirection={{ base: "column", sm: reverse ? "row-reverse" : "row" }}
      marginBottom={{ base: "0.5rem", sm: "6rem" }}
      justifyContent="space-between"
      gap="2rem"
    >
      <Box width={{ base: "20rem", sm: "25rem" }}>
        <Image
          src={photo}
          alt={title}
          width="100%"
          borderRadius="md"
          objectFit="cover"
        />
      </Box>

      <Box
        marginLeft={{ base: "0", sm: reverse ? "0" : "3rem" }}
        marginRight={{ base: "0", sm: reverse ? "3rem" : "0" }}
      >
        <Text
          fontSize={{ base: "2xl", sm: "3xl" }}
          color="#7B9BA6"
          fontWeight="bold"
          marginBottom="1rem"
        >
          {title}
        </Text>

        <UnorderedList
          fontSize={{ base: "sm", sm: "lg" }}
          spacing={{ base: "0", sm: "1rem" }}
          marginBottom={{ base: "3rem", sm: "2rem" }}
        >
          {tasks.map((task, index) => (
            <ListItem key={index}>{task}</ListItem>
          ))}
        </UnorderedList>
      </Box>
    </Flex>
  );
};

export default ServiceList;
