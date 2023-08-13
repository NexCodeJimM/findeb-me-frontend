"use client";
import { Box, SimpleGrid, Text, Flex, Image } from "@chakra-ui/react";
import { about, socials, brand, legal } from "./footerConsts";

import Link from "next/link";

const Footer = () => {
  return (
    <Box backgroundColor="#797979">
      <Box
        maxWidth="1280px"
        margin="0 auto"
        paddingY="3rem"
        paddingX={{ base: "2rem", sm: "0" }}
      >
        <SimpleGrid
          columns="4"
          color="whiteAlpha.700"
          gap="1.7rem"
          minChildWidth="150px"
        >
          {/* Brand */}
          <Flex flexDirection="column">
            {brand.map((item) => (
              <FooterBrand key={item} {...item} />
            ))}
          </Flex>

          {/* About */}
          <Flex flexDirection="column">
            <FooterHeader title="Our Company" />

            {/* About Links */}
            {about.map((item) => (
              <FooterLink key={item.name} {...item} />
            ))}
          </Flex>

          {/* Legal */}
          <Flex flexDirection="column">
            <FooterHeader title="Legal" />

            {/* Legal Links */}
            {legal.map((item) => (
              <FooterLink key={item.name} {...item} />
            ))}
          </Flex>

          {/* Socials */}
          <Flex flexDirection="column">
            <FooterHeader title="Follow Us" />

            {/* Socials Links */}
            {socials.map((item) => (
              <FooterSocials key={item} {...item} />
            ))}
          </Flex>
        </SimpleGrid>
      </Box>

      {/* Bottom Footer */}
      <Box
        backgroundColor="#414141"
        display="flex"
        padding="2rem"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        color="white"
      >
        {/* Copyright */}
        <Text fontSize="xs" textAlign="center">
          Copyright 2023 ©{" "}
          <Link href="https://findebme.com" target="_blank">
            FINDEB FZCO
          </Link>
          . All Rights Reserved.
        </Text>
      </Box>
    </Box>
  );
};

export default Footer;

const FooterLink = ({ title, link }) => {
  return (
    <Text marginBottom="0.5rem">
      <Link href={link}>{title}</Link>
    </Text>
  );
};

const FooterHeader = ({ title }) => {
  return (
    <Text as="h4" fontWeight="bold" fontSize="xl" marginBottom="1rem">
      {title}
    </Text>
  );
};

const FooterBrand = ({ photo, email, office, phone }) => {
  return (
    <>
      <Image src={photo} alt="logo" width="200px" />
      <Text fontSize="md" marginTop="1rem">
        {email}
      </Text>
      <Text fontSize="md" marginTop="0.5rem">
        {phone}
      </Text>
      <Text fontSize="md" marginTop="0.5rem">
        {office}
      </Text>
    </>
  );
};

const FooterSocials = ({ title, link, icon }) => {
  return (
    <Box display="row">
      <Link href={link} target="_blank">
        <Text
          fontSize="1rem"
          display="flex"
          alignItems="center"
          gap="1rem"
          marginBottom="0.5rem"
        >
          {icon} <span>{title}</span>
        </Text>
      </Link>
    </Box>
  );
};
