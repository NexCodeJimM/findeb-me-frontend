"use client";

import PageHeader from "@/components/common/modules/PageHeader/PageHeader";
import { Box, Grid, GridItem, Text } from "@chakra-ui/react";
import { contactDetails } from "@/components/Contact/contactConsts";
import TextContentBox from "@/components/common/modules/TextContentBox/TextContentBox";
import ContactForm from "@/components/Contact/ContactForm";
import Maps from "@/components/GoogleMaps/Maps";

const Contact = () => {
  const address = "Prime Tower Businesses bay Dubai UAE";

  return (
    <>
      <PageHeader
        photo={`url('./assets/images/contact1.jpg')`}
        title="Contact Us"
        desc="If you have any questions, we're just one email away!"
      />

      <Box backgroundColor="#F7F8F9" paddingY="5rem">
        <Grid
          templateColumns="repeat(6, 1fr)"
          gap="5"
          maxWidth="1280px"
          margin="0 auto"
        >
          {/* Cards */}
          <GridItem
            colSpan={{ base: 6, sm: 2 }}
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            {contactDetails.map((contact, index) => (
              <ContactCard key={index} {...contact} />
            ))}
          </GridItem>

          {/* Form */}
          <GridItem colSpan={{ base: 6, sm: 4 }}>
            <TextContentBox title="Send Us A Message">
              <ContactForm />
            </TextContentBox>
          </GridItem>
        </Grid>
      </Box>

      <Box maxWidth="1280px" margin="0 auto" padding="2rem">
        <Box
          display="flex"
          justifyContent="center"
          marginY="2rem"
          flexDirection="column"
          textAlign="center"
        >
          <Text
            textStyle="sectionHeader"
            fontSize="3xl"
            marginBottom="1rem"
            color="gray.700"
          >
            Find us on Google Maps
          </Text>

          <Text textStyle="sectionBody" color="gray.500">
            Navigate to our precise address effortlessly and explore our
            physical presence with the convenience of Google Maps. Get accurate
            directions, explore nearby landmarks, and embark on a seamless
            journey to connect with us in person.
          </Text>
        </Box>

        <Box marginBottom="2rem">
          <Maps address={address} />
        </Box>
      </Box>
    </>
  );
};

export default Contact;

const ContactCard = ({ label, title, icon }) => {
  return (
    <Box
      width="300px"
      backgroundColor="white"
      fontSize="md"
      alignItems="center"
      display="flex"
      gap="1rem"
      paddingX="1rem"
      paddingY="1rem"
      borderRadius="md"
      borderTop="4px solid #FFB800"
      color="#383838"
      shadow="md"
      marginBottom="2rem"
    >
      <Box
        bgColor="orange.100"
        color="#F9A61A"
        padding="1rem"
        rounded="full"
        fontSize="2xl"
      >
        {icon}
      </Box>

      <Box display="flex" flexDirection="column">
        <Text
          marginBottom="0.3rem"
          fontWeight="bold"
          fontFamily="Aileron"
          color="gray.800"
          fontSize={{ base: "sm", sm: "md" }}
        >
          {label}
        </Text>
        <Text
          fontFamily="Roboto"
          color="gray.500"
          fontSize={{ base: "sm", sm: "md" }}
        >
          {title}
        </Text>
      </Box>
    </Box>
  );
};
