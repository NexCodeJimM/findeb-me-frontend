"use client";

import {
  Avatar,
  Badge,
  Box,
  Divider,
  Grid,
  GridItem,
  Text,
} from "@chakra-ui/react";
import { useSession } from "next-auth/react";

export default function UserProfile() {
  const { data: session, status } = useSession();
  const colorScheme = session?.user.role === "Admin" ? "green" : "red";

  console.log("Session:", session);

  return (
    <Box
      maxWidth="1280px"
      margin="0 auto"
      bgColor="white"
      padding="2rem"
      rounded="lg"
      shadow="lg"
    >
      <Text
        fontSize="3xl"
        fontWeight="bold"
        fontFamily="Aileron"
        letterSpacing="1px"
        color="gray.700"
      >
        Profile
      </Text>

      <Divider marginY="1rem" />

      <Grid templateColumns="repeat(6, 1fr)" fontFamily="Roboto">
        <GridItem
          colSpan={{ base: 6, sm: 2 }}
          display="flex"
          flexDirection="column"
        >
          <Box
            alignItems="center"
            display="flex"
            flexDirection="column"
            paddingY="3rem"
          >
            <Avatar
              marginBottom="1rem"
              size="2xl"
              src={
                "https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
              }
            />
            <Text fontSize="2xl" fontWeight="bold">
              {session?.user.name}
            </Text>
            <Badge variant="outline" colorScheme="telegram">
              {session?.user.position}
            </Badge>
          </Box>
        </GridItem>

        <GridItem
          colSpan={{ base: 6, sm: 2 }}
          display="flex"
          flexDirection="column"
        >
          <Box marginTop="1rem">
            <Text>Employee ID:</Text>
            <Text fontWeight="semibold" fontSize={{ base: "md", sm: "lg" }}>
              FDB{session?.user.employeeID}
            </Text>
          </Box>

          <Box marginTop="1rem">
            <Text>Email Address:</Text>
            <Text fontWeight="semibold" fontSize={{ base: "md", sm: "lg" }}>
              {session?.user.email}
            </Text>
          </Box>

          <Box marginTop="1rem">
            <Text>Phone Number:</Text>
            <Text fontWeight="semibold" fontSize={{ base: "md", sm: "lg" }}>
              {session?.user.phone}
            </Text>
          </Box>

          <Box marginTop="1rem">
            <Text>Address:</Text>
            <Text fontWeight="semibold" fontSize={{ base: "md", sm: "lg" }}>
              {session?.user.address}
            </Text>
          </Box>

          <Box marginTop="1rem">
            <Text>City:</Text>
            <Text fontWeight="semibold" fontSize={{ base: "md", sm: "lg" }}>
              {session?.user.city}
            </Text>
          </Box>
        </GridItem>

        <GridItem
          colSpan={{ base: 6, sm: 2 }}
          display="flex"
          flexDirection="column"
        >
          <Box marginTop="1rem">
            <Text>State:</Text>
            <Text fontWeight="semibold" fontSize={{ base: "md", sm: "lg" }}>
              {session?.user.state}
            </Text>
          </Box>

          <Box marginTop="1rem">
            <Text>Postal/Zip Code:</Text>
            <Text fontWeight="semibold" fontSize={{ base: "md", sm: "lg" }}>
              {session?.user.postalCode}
            </Text>
          </Box>

          <Box marginTop="1rem">
            <Text>Country:</Text>
            <Text fontWeight="semibold" fontSize={{ base: "md", sm: "lg" }}>
              {session?.user.country}
            </Text>
          </Box>

          <Box marginTop="1rem">
            <Text>Role:</Text>
            <Badge colorScheme={colorScheme} fontSize="sm">
              {session?.user.role}
            </Badge>
          </Box>
        </GridItem>
      </Grid>
    </Box>
  );
}
