"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import countryList from "country-list";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { FaUserPlus } from "react-icons/fa";
import Dropzone from "@/components/Dropzone/Dropzone";

import {
  FormControl,
  FormLabel,
  Button,
  Input,
  InputGroup,
  InputLeftAddon,
  useToast,
  Select,
  SimpleGrid,
  Box,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";

export default function RegisterForm() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const router = useRouter();
  const [data, setData] = useState({
    name: "",
    email: "",
    employeeId: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    country: "",
    postalCode: "",
    password: "",
    role: "",
    position: "",
    image: "",
  });

  const registerUser = async (e) => {
    e.preventDefault();

    const response = await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data }),
    });

    if (response.ok) {
      // Show success toast
      toast({
        title: "User Added",
        description: "The user has been successfully added.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    }

    const body = await response.json();
    console.log(body);
    router.push("/admin/dashboard/users");
  };

  return (
    <>
      {/* Modal */}
      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Upload Image</ModalHeader>
          <ModalCloseButton />

          <ModalBody>
            <Dropzone onClose={onClose} />
          </ModalBody>
        </ModalContent>
      </Modal>

      <form onSubmit={registerUser} method="POST">
        <FormControl fontFamily="Roboto">
          <SimpleGrid columns={2} spacing={4} marginBottom="1rem">
            <Box>
              <FormLabel>Full Name</FormLabel>
              <Input
                marginBottom="1rem"
                type="text"
                id="name"
                placeholder="John Doe"
                required
                value={data.name}
                onChange={(e) => setData({ ...data, name: e.target.value })}
              />

              <FormLabel>Employee ID</FormLabel>
              <InputGroup>
                <InputLeftAddon children="FDB" />
                <Input
                  marginBottom="1rem"
                  type="text"
                  id="employeeId"
                  placeholder="001"
                  required
                  value={data.employeeId}
                  onChange={(e) =>
                    setData({ ...data, employeeId: e.target.value })
                  }
                />
              </InputGroup>
            </Box>

            <Box>
              <FormLabel>Email Address</FormLabel>
              <Input
                marginBottom="1rem"
                type="email"
                id="email"
                placeholder="john@website.com"
                required
                value={data.email}
                onChange={(e) => setData({ ...data, email: e.target.value })}
              />

              <FormLabel>Phone Number</FormLabel>
              <Input
                marginBottom="1rem"
                type="number"
                id="phone"
                placeholder="+971 00 000 0000"
                required
                value={data.phone}
                onChange={(e) => setData({ ...data, phone: e.target.value })}
              />
            </Box>

            <Box>
              <FormLabel>Position</FormLabel>
              <Input
                marginBottom="1rem"
                type="text"
                id="position"
                placeholder="Manager"
                required
                value={data.position}
                onChange={(e) => setData({ ...data, position: e.target.value })}
              />

              <FormLabel>Role</FormLabel>
              <Select
                marginBottom="1rem"
                id="role"
                placeholder="Select Role"
                required
                value={data.role}
                onChange={(e) => setData({ ...data, role: e.target.value })}
              >
                <option value="user">User</option>
                <option value="admin">Admin</option>
              </Select>
            </Box>

            <Box>
              <FormLabel>Address</FormLabel>
              <Input
                marginBottom="1rem"
                type="text"
                id="address"
                value={data.address}
                onChange={(e) => setData({ ...data, address: e.target.value })}
              />

              <FormLabel>City</FormLabel>
              <Input
                marginBottom="1rem"
                type="text"
                id="city"
                placeholder="Business Bay"
                value={data.city}
                onChange={(e) => setData({ ...data, city: e.target.value })}
              />
            </Box>

            <Box>
              <FormLabel>State</FormLabel>
              <Input
                marginBottom="1rem"
                type="text"
                id="state"
                placeholder="Dubai"
                value={data.state}
                onChange={(e) => setData({ ...data, state: e.target.value })}
              />

              <FormLabel>Country</FormLabel>
              <Select
                marginBottom="1rem"
                id="country"
                placeholder="Select Country"
                required
                value={data.country}
                onChange={(e) => setData({ ...data, country: e.target.value })}
              >
                {countryList.getData().map((country) => (
                  <option key={country.code} value={country.name}>
                    {country.name}
                  </option>
                ))}
              </Select>
            </Box>

            <Box>
              <FormLabel>Postal/ZIP Code</FormLabel>
              <Input
                marginBottom="1rem"
                type="text"
                id="postalCode"
                placeholder="00000"
                value={data.postalCode}
                onChange={(e) =>
                  setData({ ...data, postalCode: e.target.value })
                }
              />

              <FormLabel>Password</FormLabel>
              <Input
                marginBottom="1rem"
                type="password"
                id="password"
                placeholder="Password"
                required
                value={data.password}
                onChange={(e) => setData({ ...data, password: e.target.value })}
              />
            </Box>

            <Box>
              <FormLabel>Image</FormLabel>
              <Button colorScheme="telegram" gap="1rem" onClick={onOpen}>
                <AiOutlineCloudUpload size="1.5rem" />
                Upload
              </Button>
            </Box>
          </SimpleGrid>
        </FormControl>

        <Box
          marginY="1rem"
          display="flex"
          justifyContent="flex-end"
          fontFamily="Roboto"
        >
          <Button type="submit" colorScheme="green" gap="0.5rem">
            <FaUserPlus size="1.3rem" />
            Add User
          </Button>
        </Box>
      </form>
    </>
  );
}
