"use client";

import PageHeader from "@/components/common/modules/PageHeader/PageHeader";
import { Box, Flex, Text } from "@chakra-ui/react";
import { contactDetails } from "@/components/Contact/contactConsts";
import TextContentBox from "@/components/common/modules/TextContentBox/TextContentBox";
import ContactForm from "@/components/Contact/ContactForm";

const Contact = () => {
  return (
    <>
      <PageHeader
        photo={`url('./assets/images/contact.jpeg')`}
        title="Contact Us"
        desc="If you have any questions, we're just one email away!"
      />

      <Box
        maxWidth="1280px"
        margin="0 auto"
        padding="2rem"
        display="flex"
        flexDirection="column"
      >
        <Flex
          flexDirection="row"
          flexWrap="wrap"
          gap="3rem"
          justifyContent="center"
          marginTop="4rem"
        >
          {contactDetails.map((item) => (
            <ContactCard key={item.title} {...item} />
          ))}
        </Flex>

        <Box marginTop="4rem">
          <TextContentBox title="Contact Form">
            <ContactForm />
          </TextContentBox>
        </Box>
      </Box>
    </>
  );
};

export default Contact;

const ContactCard = ({ title, icon }) => {
  return (
    <Box
      width="300px"
      backgroundColor="#F1F1F1"
      fontSize="md"
      alignItems="center"
      display="flex"
      flexDirection="column"
      gap="1rem"
      paddingX="1rem"
      paddingY="2rem"
      borderRadius="md"
      borderTop="4px solid #FFB800"
      color="#383838"
      shadow="md"
    >
      <Box fontSize="3xl">{icon}</Box>

      <Text textAlign="center">{title}</Text>
    </Box>
  );
};
