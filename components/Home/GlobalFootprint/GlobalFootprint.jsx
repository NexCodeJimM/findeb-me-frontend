import { Box, Grid, GridItem, Image, Text } from "@chakra-ui/react";

const GlobalFootprint = () => {
  return (
    <Box maxWidth="1280px" margin="0 auto" paddingY="5rem" paddingX="2rem">
      <Grid templateColumns="repeat(6, 1fr)" gap="5">
        <GridItem colSpan={{ base: 6, sm: 3 }}>
          <Image
            src="/assets/images/worldmap.png"
            alt="world-map"
            loading="eager"
          />
        </GridItem>

        <GridItem colSpan={{ base: 6, sm: 3 }}>
          <Text
            fontSize={{ base: "3xl", sm: "4xl" }}
            fontFamily="Aileron"
            fontWeight="bold"
            color="gray.600"
          >
            Global Footprint
          </Text>

          <Text
            fontFamily="Roboto"
            marginTop="1rem"
            fontSize={{ base: "sm", sm: "md" }}
            color="gray.600"
          >
            Collaboration lies at the heart of our success story. Through
            strategic partnerships, we amplify our reach and impact. Our
            operations extend across Europe and Africa, where we undertake
            studies, projects, management, supervision, consulting, and audits
            of projects that matter. By bridging expertise and insight, we
            transcend borders to contribute to the advancement of diverse
            communities.
          </Text>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default GlobalFootprint;
