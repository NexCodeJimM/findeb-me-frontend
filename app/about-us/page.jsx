"use client";
import MissionList from "@/components/AboutPage/Missions/MissionList";
import PageHeader from "@/components/common/modules/PageHeader/PageHeader";
import { Box, Flex, Text, Image } from "@chakra-ui/react";

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

      {/* Mission */}
      <Box bgColor="#F1F1F1" marginTop="2rem">
        <Box maxWidth="1280px" padding="2rem" margin="0 auto">
          {/* Content */}
          <Box
            display="flex"
            flexDirection={{ base: "column-reverse", sm: "row" }}
            alignItems="center"
            justifyContent={{ base: "flex-start", sm: "space-between" }}
          >
            {/* Left */}
            <Box width="100%" textAlign="start">
              <Text
                fontSize={{ base: "4xl", sm: "5xl" }}
                lineHeight="shorter"
                marginBottom="1rem"
                fontWeight="light"
                color="#F9A61A"
              >
                Our Mission
              </Text>
              <Text color="#797979" fontSize={{ base: "md", sm: "lg" }}>
                To Improve overall project performance through:
              </Text>

              <Box>
                <MissionList />
              </Box>
            </Box>

            {/* Right */}
            <Box
              width="100%"
              padding={{ base: "0", sm: "2rem" }}
              marginY={{ base: "2rem", sm: "2rem" }}
              display="flex"
              justifyContent="center"
            >
              <Image
                src="/assets/images/mission1.jpeg"
                alt="mission-image"
                borderRadius="lg"
              />
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Vision */}
      <Box
        position="relative"
        minHeight={{ base: "40vh", sm: "50vh" }}
        backgroundImage={`url('./assets/images/vision1.jpeg')`}
        backgroundPosition="center"
        backgroundSize="cover"
        backgroundAttachment="fixed"
      >
        {/* Tint */}
        <Box
          position="absolute"
          width="100%"
          height="100%"
          opacity="0.8"
          backgroundColor="gray.700"
        />

        {/* Content */}
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems={{ base: "center", sm: "flex-end" }}
          maxWidth="1280px"
          padding="2rem"
          margin="0 auto"
          position="absolute"
          left="0"
          right="0"
          bottom="0"
          top="0"
        >
          <Text
            color="white"
            fontSize={{ base: "5xl", sm: "8xl" }}
            fontWeight="light"
          >
            Our Vision
          </Text>

          <Text
            color="white"
            fontSize={{ base: "xl", sm: "3xl" }}
            fontWeight="light"
          >
            To be synonymous with excellence in overall project delivery.
          </Text>
        </Box>
      </Box>
    </>
  );
};

export default AboutUs;
