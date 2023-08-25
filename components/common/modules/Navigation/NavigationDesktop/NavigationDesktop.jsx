"use client";
import {
  Button,
  Image,
  Box,
  Flex,
  Text,
  Popover,
  PopoverTrigger,
} from "@chakra-ui/react";
import Link from "next/link";
import { navigationLinks } from "../navigationConsts";

const NavigationDesktop = () => {
  return (
    <Box
      color="#797979"
      paddingY="1rem"
      backgroundColor="#F1F1F1"
      display={{ base: "none", md: "block" }}
    >
      <Box maxWidth="1280px" margin="0 auto">
        <Flex alignItems="center" justifyContent="space-between">
          <Link href="/">
            <Box display="flex" alignItems="center">
              <Image
                src="/assets/images/logo.png"
                alt="logo"
                width="150px"
                height="auto"
                objectFit="contain"
              />
            </Box>
          </Link>

          <Flex
            gap="12"
            alignItems="center"
            fontWeight="medium"
            textTransform="uppercase"
            fontSize="0.8rem"
          >
            {navigationLinks.map((item) => (
              <NavigationLink key={item.title} {...item} />
            ))}
            <Link href="/contact">
              <Button
                padding="1.5rem"
                backgroundColor="#F9A61A"
                _hover={{ backgroundColor: "#C77F05" }}
                color="white"
                fontSize="0.8rem"
                fontWeight="medium"
              >
                Contact Us
              </Button>
            </Link>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};

export default NavigationDesktop;

const NavigationLink = ({ title, path, icon, children }) => {
  return (
    <Popover trigger="hover" placement="bottom-start">
      <PopoverTrigger>
        <Box as="span" position="relative" cursor="pointer">
          <Link href={path}>
            <Flex
              alignItems="center"
              justifyContent="center"
              paddingY="0.5rem"
              width="100%" // Set the width to 100% to fill the popover
            >
              {icon}
              <Text marginLeft="0.5rem" _hover={{ color: "#7B9BA6" }}>
                {title}
              </Text>
            </Flex>
          </Link>
        </Box>
      </PopoverTrigger>

      {/* <PopoverContent
        border={0}
        boxShadow="xl"
        bg="white"
        p={4}
        borderRadius="sm"
        minW="200px"
        position="absolute"
        top="100%"
        left="50%" // Center horizontally
        transform="translateX(-50%)" // Center horizontally
        zIndex="1"
      >
        <Box>
          <Stack>
            {children?.map((child) => (
              <Link href={child.link} key={child.title}>
                <Flex
                  _hover={{
                    marginLeft: "0.2rem",
                  }} // Apply hover styling
                  alignItems="center"
                  justifyContent="space-between"
                  padding="1.5rem"
                >
                  <Text>{child.title}</Text>
                  <Flex opacity={1} marginLeft="0.5rem" alignItems="center">
                    {child.icon}
                  </Flex>
                </Flex>
                <Divider marginY="0.7rem" />
              </Link>
            ))}
          </Stack>
        </Box>
      </PopoverContent> */}
    </Popover>
  );
};
