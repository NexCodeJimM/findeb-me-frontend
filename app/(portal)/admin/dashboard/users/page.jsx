"use client";
import { useEffect, useState, useRef } from "react";

import {
  Box,
  Button,
  TableContainer,
  Table,
  Td,
  Tr,
  Text,
  Thead,
  Th,
  Tbody,
  Badge,
  Divider,
  Tooltip,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  AlertDialogCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { BsEyeFill, BsFillTrashFill } from "react-icons/bs";
import { set } from "react-hook-form";

const Users = () => {
  const [users, setUsers] = useState([]);
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef();
  const [selectedItem, setSelectedItem] = useState(null);

  const fetchUsers = async () => {
    try {
      const response = await fetch("/api/users");
      if (response.ok) {
        const data = await response.json();
        console.log("Fetched users:", data);
        setUsers(data);
        router.refresh();
      } else {
        console.error("Error fetching users:", response.statusText);
      }
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  useEffect(() => {
    if (selectedItem) {
      onOpen();
    }
  }, [selectedItem]);

  const handleDelete = async () => {
    try {
      onClose();
      const response = await fetch("/api/users/", {
        method: "DELETE",
        body: JSON.stringify({ id: selectedItem }),
      });

      if (response.ok) {
        const data = await response.json();
        setUsers(data);
        fetchUsers();
        setSelectedItem(null);
      } else {
        console.error("Error deleting user:", response.statusText);
        setSelectedItem(null);
      }
    } catch (error) {
      console.error("Error deleting user:", error);
      setSelectedItem(null);
    }
  };

  return (
    <>
      {/* Alert Box */}
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Delete User
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure? You can't undo this action afterwards.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme="red" onClick={handleDelete} ml={3}>
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>

      <Box maxWidth="1920px" margin="0 auto">
        <Box bgColor="white" padding="2rem" rounded="lg">
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Text marginBottom="1rem" fontSize="3xl" fontWeight="bold">
              User Management
            </Text>
            {/* Button */}
            <Link href="/admin/dashboard/users/add-user">
              <Button colorScheme="green" fontSize="sm">
                + Add User
              </Button>
            </Link>
          </Box>

          <Divider marginY="1rem" />

          {/* Table Users */}
          <TableContainer marginTop="1.5rem">
            <Table variant="striped">
              <Thead>
                <Tr>
                  <Th>ID</Th>
                  <Th>Name</Th>
                  <Th>Email</Th>
                  <Th>Role</Th>
                  <Th>Position</Th>
                  <Th>Country</Th>
                  <Th>Actions</Th>
                </Tr>
              </Thead>

              <Tbody fontSize="sm">
                {users.length > 0 ? (
                  users.map((user) => (
                    <Tr key={user.id}>
                      <Td>
                        <Text fontWeight="bold">FDB{user.employeeId}</Text>
                      </Td>
                      <Td>{user.name}</Td>
                      <Td>{user.email}</Td>
                      <Td>
                        <Badge colorScheme="telegram">{user.role}</Badge>
                      </Td>
                      <Td>{user.position}</Td>
                      <Td>{user.country}</Td>
                      <Td>
                        <Tooltip label="View User" hasArrow>
                          <Button
                            colorScheme="blue"
                            marginRight="0.5rem"
                            fontSize="sm"
                            onClick={() => {
                              router.push(`/admin/dashboard/users/${user.id}`);
                            }}
                          >
                            <BsEyeFill />
                          </Button>
                        </Tooltip>

                        <Tooltip label="Delete User" hasArrow>
                          <Button
                            // onClick={() => {
                            //   handleDelete(user.id);
                            // }}
                            onClick={() => {
                              setSelectedItem(user.id);
                            }}
                            colorScheme="red"
                            fontSize="sm"
                          >
                            <BsFillTrashFill />
                          </Button>
                        </Tooltip>
                      </Td>
                    </Tr>
                  ))
                ) : (
                  <Tr>
                    <Td colSpan="7">No users available</Td>
                  </Tr>
                )}
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </>
  );
};

export default Users;
