"use client";
import RegisterForm from "@/components/Dashboard/Forms/Register/RegisterForm";
import { Box, Divider, Text, Button } from "@chakra-ui/react";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import Link from "next/link";

const AddUser = () => {
  return (
    <>
      <Box maxWidth="1920px" margin="0 auto">
        <Link href="/admin/dashboard/users">
          <Button
            marginBottom="1rem"
            colorScheme="telegram"
            fontSize="sm"
            gap="2"
          >
            <BsFillArrowLeftCircleFill />
            Go Back
          </Button>
        </Link>
        <Box bgColor="white" padding="2rem" rounded="lg">
          <Text
            marginBottom="1rem"
            fontSize="3xl"
            fontWeight="bold"
            fontFamily="Aileron"
          >
            Add a User
          </Text>
          <Divider marginY="1rem" />
          <RegisterForm />
        </Box>
      </Box>
    </>
  );
};

export default AddUser;
