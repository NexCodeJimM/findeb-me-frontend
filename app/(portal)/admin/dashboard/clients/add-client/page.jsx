"use client";

import ClientAdd from "@/components/Dashboard/Forms/ClientAdd/ClientAdd";
import { Box, Divider, Text } from "@chakra-ui/react";

const AddClient = () => {
  return (
    <>
      <Box
        maxWidth="1280px"
        bgColor="white"
        margin="0 auto"
        padding="2rem"
        rounded="lg"
      >
        <Text fontSize="3xl" fontWeight="bold">
          Add Client
        </Text>

        <Divider marginY="1rem" />

        <ClientAdd />
      </Box>
    </>
  );
};

export default AddClient;
