import { Box, Text, Flex, Image } from "@chakra-ui/react";
import { whyUsList } from "../whyUsConsts";
import Card from "@/components/common/Card/Card";

const WhyUsCards = () => {
  return (
    <Box padding="2rem" marginTop={{ base: "1rem", sm: "3rem" }}>
      <Flex
        flexDirection={{ base: "column", sm: "row" }}
        gap={{ base: "3rem", sm: "1rem" }}
      >
        {whyUsList.map((item, index) => (
          <WhyList key={index} {...item} index={index} />
        ))}
      </Flex>
    </Box>
  );
};

export default WhyUsCards;

const WhyList = ({ title, icon }) => {
  return <Card title={title} icon={icon} />;
};
