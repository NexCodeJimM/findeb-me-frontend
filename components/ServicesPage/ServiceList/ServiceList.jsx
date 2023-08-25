import {
  Flex,
  Box,
  Text,
  UnorderedList,
  ListItem,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import { serviceLists } from "./serviceConsts";

const ServiceList = () => {
  return (
    <Flex flexDirection="column" marginTop="4rem">
      <ServicesListing />
    </Flex>
  );
};

const ServicesListing = () => {
  return (
    <Tabs
      orientation="vertical"
      size={{ base: "md", sm: "lg" }}
      colorScheme="red"
      flexDirection={{ base: "column", sm: "row" }}
      gap="3rem"
    >
      <TabList fontFamily="Aileron">
        {serviceLists.map((service, index) => (
          <Tab key={index}>{service.title}</Tab>
        ))}
      </TabList>

      <TabPanels>
        {serviceLists.map((service, index) => (
          <TabPanel key={index}>
            <Text
              marginBottom="2rem"
              fontSize={{ base: "2xl", sm: "4xl" }}
              casing="uppercase"
              fontWeight="bold"
              fontFamily="Aileron"
              color="#F9A61A"
            >
              {service.title}
            </Text>

            <Box
              position="relative"
              minHeight={{ base: "15vh", sm: "35vh" }}
              backgroundImage={service.photo}
              backgroundPosition="left"
              backgroundSize="cover"
              rounded="lg"
              shadow="lg"
            />

            <Text
              color="#797979"
              marginTop="2rem"
              fontSize={{ base: "sm", sm: "md" }}
              fontFamily="Roboto"
            >
              {service?.description}
            </Text>

            <Text
              color="#797979"
              marginTop="2rem"
              fontSize={{ base: "sm", sm: "md" }}
              fontFamily="Roboto"
            >
              Below are the services we offer:
            </Text>

            <UnorderedList
              fontSize={{ base: "sm", sm: "md" }}
              marginTop="2rem"
              color="#797979"
              fontFamily="Roboto"
            >
              {service.tasks.map((task, taskIndex) => (
                <ListItem
                  marginY={{ base: "0.5rem", sm: "1rem" }}
                  key={taskIndex}
                >
                  {task}
                </ListItem>
              ))}
            </UnorderedList>
          </TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  );
};

export default ServiceList;
