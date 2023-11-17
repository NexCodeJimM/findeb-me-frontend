"use client";

import { Box, Spinner } from "@chakra-ui/react";

const loading = () => {
  return (
    <Box
      maxWidth="1280px"
      margin="0 auto"
      padding="2rem"
      backgroundColor="white"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
      />
    </Box>
  );
};

export default loading;
