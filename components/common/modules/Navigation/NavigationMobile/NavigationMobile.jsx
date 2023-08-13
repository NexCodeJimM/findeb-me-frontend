"use client";
import {
  IconButton,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Box,
  Flex,
} from "@chakra-ui/react";

import Link from "next/link";

import { navigationLinks } from "../navigationConsts";
import { HamburgerIcon } from "@chakra-ui/icons";

const NavigationMobile = () => {
  return (
    // Outer Container
    <Box
      color="#797979"
      padding="2rem"
      backgroundColor="white"
      display={{ base: "block", md: "none" }}
    >
      {/* Inner Container */}

      <Flex alignItems="center" justifyContent="space-between">
        {/* Logo */}
        <Link href="/">
          <Box display="flex" alignItems="center">
            <Image
              src="/assets/images/logo.png"
              alt="colored-logo"
              width="100px"
              height="auto"
              objectFit="contain"
            />
          </Box>
        </Link>

        {/* Array of object link */}
        <Menu>
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={<HamburgerIcon />}
            variant="outline"
          />
          <MenuList>
            {navigationLinks.map((item) => (
              <NavigationLink key={item.title} {...item} />
            ))}
          </MenuList>
        </Menu>
      </Flex>
    </Box>
  );
};

export default NavigationMobile;

const NavigationLink = ({ title, path, icon }) => {
  return (
    <Link href={path}>
      <MenuItem alignItems="center" gap="0.5rem">
        {icon}
        {title}
      </MenuItem>
    </Link>
  );
};
