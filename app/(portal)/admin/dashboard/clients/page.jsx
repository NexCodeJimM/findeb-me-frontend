"use client";
import {
  Box,
  Text,
  Button,
  TableContainer,
  Table,
  Td,
  Tr,
  Thead,
  Th,
  Tbody,
  Divider,
} from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

const Clients = () => {
  const [clients, setClients] = useState([]);
  const router = useRouter();

  // Fetch clients
  const fetchClients = async () => {
    try {
      const response = await fetch("/api/clients");
      if (response.ok) {
        const data = await response.json();
        console.log("Fetched clients:", data);
        setClients(data);
      } else {
        console.error("Error fetching clients:", response.statusText);
      }
    } catch (error) {
      console.error("Error fetching clients:", error);
    }
  };

  useEffect(() => {
    fetchClients();
  }, []);

  return (
    <Box
      maxWidth="1920px"
      margin="0 auto"
      bgColor="white"
      padding="2rem"
      rounded="lg"
      shadow="lg"
    >
      <Box
        display="flex"
        justifyContent={{ base: "flex-start", sm: "space-between" }}
        alignItems={{ base: "flex-start", sm: "center" }}
        flexDirection={{ base: "column", sm: "row" }}
      >
        <Text
          fontSize="3xl"
          fontWeight="bold"
          fontFamily="Aileron"
          letterSpacing="1px"
          color="gray.700"
        >
          Client Management
        </Text>

        {/* Button */}
        <Link href="/admin/dashboard/clients/add-client">
          <Button colorScheme="green" fontSize="sm">
            + Add Client
          </Button>
        </Link>
      </Box>

      <Divider marginY="1rem" />

      {/* Table */}
      <TableContainer marginTop="1.5rem">
        <Table variant="striped">
          <Thead>
            <Tr>
              <Th>ID</Th>
              <Th>Name</Th>
              <Th>Email</Th>
              <Th>Phone</Th>
              <Th>Company</Th>
              <Th>Actions</Th>
            </Tr>
          </Thead>

          <Tbody>
            {clients.map((client) => (
              <Tr key={client.id}>
                <Td fontWeight="bold">CLT{client.clientId}</Td>
                <Td>{client.name}</Td>
                <Td>{client.email}</Td>
                <Td>{client.phone}</Td>
                <Td>{client.company}</Td>
                <Td>
                  <Button
                    colorScheme="blue"
                    marginRight="0.5rem"
                    fontSize="sm"
                    onClick={() => {
                      router.push(`/admin/dashboard/clients/${client.id}`);
                    }}
                  >
                    View
                  </Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Clients;
