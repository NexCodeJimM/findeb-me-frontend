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
            <Image src="/assets/images/logo.png" alt="logo" width="200px" />
            {brand.map((item, index) => (
              <FooterBrand key={index} {...item} />
            ))}
          </Flex>

          {/* About */}
          <Flex flexDirection="column">
            <FooterHeader title="Our Company" />

            {/* About Links */}
            {about.map((item, index) => (
              <FooterLink key={index} {...item} />
            ))}
          </Flex>

          {/* Legal */}
          <Flex flexDirection="column">
            <FooterHeader title="Legal" />

            {/* Legal Links */}
            {legal.map((item, index) => (
              <FooterLink key={index} {...item} />
            ))}
          </Flex>

          {/* Socials */}
          <Flex flexDirection="column">
            <FooterHeader title="Follow Us" />

            {/* Socials Links */}
            {socials.map((item, index) => (
              <FooterSocials key={index} {...item} />
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
        <Text fontSize="xs" textAlign="center" fontFamily="Aileron">
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
    <Link href={link}>
      <Text
        marginBottom="0.5rem"
        _hover={{ color: "#F9A61A" }}
        fontFamily="Aileron"
      >
        {title}
      </Text>
    </Link>
  );
};

const FooterHeader = ({ title }) => {
  return (
    <Text
      as="h4"
      fontWeight="bold"
      fontSize="xl"
      marginBottom="1rem"
      fontFamily="Roboto"
    >
      {title}
    </Text>
  );
};

const FooterBrand = ({ title, icon }) => {
  return (
    <>
      <Box fontFamily="Aileron">
        <Box display="flex" alignItems="center" gap="0.5rem" marginTop="1rem">
          <Text>{icon}</Text>
          <Text fontSize="md">{title}</Text>
        </Box>
      </Box>
    </>
  );
};

const FooterSocials = ({ title, link, icon }) => {
  return (
    <Box display="row">
      <Link href={link} target="_blank">
        <Text
          fontSize="1rem"
          fontFamily="Aileron"
          display="flex"
          alignItems="center"
          gap="1rem"
          marginBottom="0.5rem"
          _hover={{ color: "#F9A61A" }}
        >
          {icon} <span>{title}</span>
        </Text>
      </Link>
    </Box>
  );
};
