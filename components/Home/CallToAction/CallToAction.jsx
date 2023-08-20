import { Box, Button, Flex, Text } from "@chakra-ui/react";
import Link from "next/link";

const CallToAction = () => {
  return (
    <Box backgroundColor="#F9A61A">
      <Box maxWidth="1280px" padding="2rem" margin="0 auto">
        <Flex
          flexDirection={{ base: "column", sm: "row" }}
          gap={{ base: "1rem", sm: "0" }}
          justifyContent="space-between"
          alignItems="center"
        >
          <Box>
            <Text color="white" fontWeight="bold" fontSize="3xl">
              Work With Us Now!
            </Text>
          </Box>

          <Box display="flex">
            <Link href="/contact">
              <Button colorScheme="red">Contact Us</Button>
            </Link>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default CallToAction;
