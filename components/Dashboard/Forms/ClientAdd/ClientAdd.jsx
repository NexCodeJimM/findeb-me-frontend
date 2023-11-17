"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import {
  FormControl,
  FormLabel,
  Button,
  Input,
  InputGroup,
  InputLeftAddon,
  useToast,
} from "@chakra-ui/react";

export default function ClientAdd() {
  const toast = useToast();
  const router = useRouter();
  const [data, setData] = useState({
    name: "",
    clientId: "",
    email: "",
    phone: "",
    country: "",
    city: "",
    address: "",
    postalCode: "",
    state: "",
    company: "",
    website: "",
  });

  const registerClient = async (e) => {
    e.preventDefault();

    const response = await fetch("/api/addclient", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data }),
    });

    if (response.ok) {
      // Show success toast
      toast({
        title: "Client Added",
        description: "The client has been successfully added.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    }

    const body = await response.json();
    console.log(body);
    router.push("/admin/dashboard/clients");
  };

  return (
    <form onSubmit={registerClient} method="POST">
      <FormControl>
        <FormLabel>Client Name</FormLabel>
        <Input
          marginBottom="1rem"
          type="text"
          id="name"
          placeholder="Mark Zuckerberg"
          required
          value={data.name}
          onChange={(e) => setData({ ...data, name: e.target.value })}
        />

        <FormLabel>Client ID</FormLabel>
        <InputGroup>
          <InputLeftAddon children="CLT" />
          <Input
            marginBottom="1rem"
            type="text"
            id="clientId"
            placeholder="001"
            required
            value={data.clientId}
            onChange={(e) => setData({ ...data, clientId: e.target.value })}
          />
        </InputGroup>

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

        <FormLabel>Company Name</FormLabel>
        <Input
          marginBottom="1rem"
          type="text"
          id="company"
          placeholder="Facebook"
          required
          value={data.company}
          onChange={(e) => setData({ ...data, company: e.target.value })}
        />

        <FormLabel>Website</FormLabel>
        <Input
          marginBottom="1rem"
          type="text"
          id="website"
          placeholder="https://www.facebook.com"
          required
          value={data.website}
          onChange={(e) => setData({ ...data, website: e.target.value })}
        />

        <FormLabel>Address</FormLabel>
        <Input
          marginBottom="1rem"
          type="text"
          id="address"
          placeholder="Dubai, UAE"
          required
          value={data.address}
          onChange={(e) => setData({ ...data, address: e.target.value })}
        />

        <FormLabel>City</FormLabel>
        <Input
          marginBottom="1rem"
          type="text"
          id="city"
          placeholder="Business Bay"
          required
          value={data.city}
          onChange={(e) => setData({ ...data, city: e.target.value })}
        />

        <FormLabel>State</FormLabel>
        <Input
          marginBottom="1rem"
          type="text"
          id="state"
          placeholder="Dubai"
          required
          value={data.state}
          onChange={(e) => setData({ ...data, state: e.target.value })}
        />

        <FormLabel>Country</FormLabel>
        <Input
          marginBottom="1rem"
          type="text"
          id="country"
          placeholder="United Arab Emirates"
          required
          value={data.country}
          onChange={(e) => setData({ ...data, country: e.target.value })}
        />

        <FormLabel>Postal/Zip Code</FormLabel>
        <Input
          marginBottom="1rem"
          type="text"
          id="postalCode"
          placeholder="00000"
          required
          value={data.postalCode}
          onChange={(e) => setData({ ...data, postalCode: e.target.value })}
        />
      </FormControl>

      <Button type="submit" colorScheme="green" marginY="1rem">
        Add Client
      </Button>
    </form>
  );
}
