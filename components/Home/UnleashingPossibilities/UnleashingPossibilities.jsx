import { Box, Grid, GridItem, Text } from "@chakra-ui/react";

const UnleashingPossibilities = () => {
  return (
    <Box
      backgroundColor="#f1f1f1"
      position="relative"
      backgroundImage={`url('./assets/images/unleash.jpg')`}
      backgroundSize="cover"
      backgroundPosition="center"
      minHeight={{ base: "60vh", sm: "50vh" }}
      backgroundAttachment="fixed"
    >
      <Box
        position="absolute"
        width="100%"
        height="100%"
        opacity="0.90"
        backgroundColor="gray.900"
      />
      <Grid
        templateColumns="repeat(6, 1fr)"
        gap="5"
        maxWidth="1280px"
        margin="0 auto"
        paddingY={{ base: "3rem", sm: "5rem" }}
        paddingX="2rem"
        position="absolute"
        left="0"
        right="0"
        bottom="0"
        top="0"
        justifyContent="center"
        alignItems="center"
      >
        <GridItem colSpan={{ base: 6, sm: 3 }}>
          <Text
            fontSize={{ base: "3xl", sm: "4xl" }}
            textStyle="sectionHeader"
            lineHeight="shorter"
            color="#F9A61A"
          >
            Unleashing Possibilities
          </Text>

          <Text
            fontFamily="Roboto"
            marginTop="1rem"
            fontSize={{ base: "sm", sm: "md" }}
            color="white"
          >
            At FINDEB, our expertise isn't confined to one realm - it spans an
            array of industries and services that transform ideas into reality.
            From the pages of design books to the mechanics of essential parts,
            from the aesthetic nuances of interior design to the enduring value
            of real estate investment, and from the innovation driving
            sustainability to the intricate details of engineering - we
            encompass it all. Our commitment to excellence is the cornerstone of
            every endeavor we undertake.
          </Text>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default UnleashingPossibilities;
