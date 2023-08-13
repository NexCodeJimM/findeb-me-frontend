"use client";
import PageHeader from "@/components/common/modules/PageHeader/PageHeader";
import { Box, Flex, Text } from "@chakra-ui/react";

const AboutUs = () => {
  return (
    <>
      <PageHeader
        photo={`url('./assets/images/headercover1.jpeg')`}
        title="About FINDEB"
        desc="Get to know who we are and what we do."
      />

      <Box maxWidth="1280px" padding="2rem" margin="0 auto">
        {/* Title */}
        <Box display="flex" flexDirection="column" alignItems="center">
          <Text
            fontSize={{ base: "4xl", sm: "5xl" }}
            fontWeight="light"
            color="#F9A61A"
          >
            Who We Are
          </Text>

          {/* Divider */}
          <Box
            backgroundColor="#7B9BA6"
            paddingY="0.1rem"
            width="10%"
            marginY="1rem"
          />
        </Box>

        {/* About Desc */}
        <Flex flexDirection="column" marginTop="1rem">
          <Box color="#797979" lineHeight="tall">
            <Text>
              FINDEB is a business corporation specialized and respected
              provider of design, architecture, engineering, and project
              management services to various industries. FINDEB curriculum
              features an extensive range of projects intended for the most
              diverse functions. Its operations encompass many diverse areas
              such as health, retail, multi-use buildings, tourism and leisure,
              housing, and services, equipment, fuel installations, industry,
              infrastructures, and planning.
            </Text>

            <Text marginTop="1rem">
              Currently, the environmental and renewables area represents a bet
              on reconciling old principles of engineering and landscaping with
              new concepts of environmental engineering, such as: treatment
              ravines, ecological restoration of water lines, natural
              engineering techniques, wind farms, power plants, hydro and
              photovoltaic parks, etc.
            </Text>

            <Text marginTop="1rem">
              In association with partnerships, FINDEB enhances its activity in
              areas of studies and projects, management and supervision of
              works, consulting, and auditing relevant Projects in Europe and
              Africa.
            </Text>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default AboutUs;
