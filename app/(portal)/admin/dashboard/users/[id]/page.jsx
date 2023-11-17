"use client";
import {
  Box,
  Button,
  Grid,
  Text,
  GridItem,
  Avatar,
  Divider,
} from "@chakra-ui/react";

import {
  BsFillArrowLeftCircleFill,
  BsPencilSquare,
  BsFillTrashFill,
} from "react-icons/bs";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";

const UserPage = () => {
  const [data, setData] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`/api/users/${id}`);
      const body = await response.json();
      setData(body);
    };
    fetchData();
  }, []);

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
        <Box backgroundColor="white" padding="2rem" rounded="lg" shadow="lg">
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Text
              fontSize="3xl"
              fontWeight="extrabold"
              fontFamily="Aileron"
              letterSpacing="1px"
            >
              Employee Profile
            </Text>

            <Box display="flex" flexDirection="row" gap="3" marginTop="1rem">
              <Button variant="outline" colorScheme="green" gap="3">
                <Text>Edit User</Text>
                <BsPencilSquare />
              </Button>

              <Button variant="solid" colorScheme="red" gap="3">
                <Text>Delete User</Text>
                <BsFillTrashFill />
              </Button>
            </Box>
          </Box>

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
                paddingY="2rem"
              >
                <Avatar
                  marginBottom="1rem"
                  size="2xl"
                  src={
                    "https://res.cloudinary.com/djzpp2hzi/image/upload/v1693464739/next/bj3rtrrp4gqi5itrbchy.jpg"
                  }
                />
              </Box>
            </GridItem>

            <GridItem
              colSpan={{ base: 6, sm: 2 }}
              display="flex"
              flexDirection="column"
            >
              <Box display="flex" flexDirection="column" paddingY="2rem">
                <Box marginBottom="0.5rem">
                  <Text>Employee ID:</Text>
                  <Text
                    fontWeight="semibold"
                    fontSize={{ base: "md", sm: "lg" }}
                  >
                    FDB{data.employeeId}
                  </Text>
                </Box>

                <Box marginBottom="0.5rem">
                  <Text>Full Name:</Text>
                  <Text
                    fontWeight="semibold"
                    fontSize={{ base: "md", sm: "lg" }}
                  >
                    {data.name}
                  </Text>
                </Box>

                <Box marginBottom="0.5rem">
                  <Text>Position:</Text>
                  <Text
                    fontWeight="semibold"
                    fontSize={{ base: "md", sm: "lg" }}
                  >
                    {data.position}
                  </Text>
                </Box>

                <Box marginBottom="0.5rem">
                  <Text>Email:</Text>
                  <Text
                    fontWeight="semibold"
                    fontSize={{ base: "md", sm: "lg" }}
                  >
                    {data.email}
                  </Text>
                </Box>

                <Box marginBottom="0.5rem">
                  <Text>Phone Number:</Text>
                  <Text
                    fontWeight="semibold"
                    fontSize={{ base: "md", sm: "lg" }}
                  >
                    {data.phone}
                  </Text>
                </Box>
              </Box>
            </GridItem>

            <GridItem
              colSpan={{ base: 6, sm: 2 }}
              display="flex"
              flexDirection="column"
            >
              <Box display="flex" flexDirection="column" paddingY="2rem">
                <Box marginBottom="0.5rem">
                  <Text>Address:</Text>
                  <Text
                    fontWeight="semibold"
                    fontSize={{ base: "md", sm: "lg" }}
                  >
                    {data.address}
                  </Text>
                </Box>

                <Box marginBottom="0.5rem">
                  <Text>City:</Text>
                  <Text
                    fontWeight="semibold"
                    fontSize={{ base: "md", sm: "lg" }}
                  >
                    {data.city}
                  </Text>
                </Box>

                <Box marginBottom="0.5rem">
                  <Text>State:</Text>
                  <Text
                    fontWeight="semibold"
                    fontSize={{ base: "md", sm: "lg" }}
                  >
                    {data.state}
                  </Text>
                </Box>

                <Box marginBottom="0.5rem">
                  <Text>Postal/Zip Code:</Text>
                  <Text
                    fontWeight="semibold"
                    fontSize={{ base: "md", sm: "lg" }}
                  >
                    {data.postalCode}
                  </Text>
                </Box>

                <Box marginBottom="0.5rem">
                  <Text>Country:</Text>
                  <Text
                    fontWeight="semibold"
                    fontSize={{ base: "md", sm: "lg" }}
                  >
                    {data.country}
                  </Text>
                </Box>
              </Box>
            </GridItem>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default UserPage;
