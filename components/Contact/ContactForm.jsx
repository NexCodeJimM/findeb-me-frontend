"use client";
import {
  Box,
  Checkbox,
  FormControl,
  Input,
  Textarea,
  Text,
  Button,
  useToast,
} from "@chakra-ui/react";
import Link from "next/link";

import { useState } from "react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { verifyCaptchaAction } from "../ReCaptcha/Captcha";

const ContactForm = () => {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const initialData = {
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
    accept: false,
  };

  const [data, setData] = useState({ ...initialData });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const toast = useToast();

  const validateForm = () => {
    const { name, phone, email, subject, message, accept } = data;
    return name && phone && email && subject && message && accept;
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!validateForm()) {
      // Display error message in a toast
      toast({
        title: "Error",
        description: "Please fill out all the required fields.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      setIsSubmitting(false);
      return;
    }

    try {
      const token = await executeRecaptcha("contactForm"); // Unique action name
      if (!token) {
        throw new Error("reCAPTCHA token not received.");
      }

      const verified = await verifyCaptchaAction(token);

      if (verified) {
        // Perform form submission logic here

        // Clear the form after successful submission
        setData({ ...initialData });

        toast({
          title: "Success",
          description: "Your message has been sent!",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
      } else {
        // Display error message in a toast
        toast({
          title: "Error",
          description: "reCAPTCHA verification failed. Please try again.",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      }
    } catch (error) {
      console.error("Error sending email:", error);
      // Display error message in a toast
      toast({
        title: "Error",
        description: "An error occurred while sending the message.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field, value) => {
    setData((prevData) => ({ ...prevData, [field]: value }));
  };

  const handleAcceptChange = (e) => {
    setData((prevData) => ({ ...prevData, accept: e.target.checked }));
  };

  return (
    <Box
      width="100%"
      borderRadius="sm"
      backgroundColor="white"
      color="gray.700"
    >
      <form onSubmit={sendEmail}>
        <FormControl>
          <Input
            marginTop="1.3rem"
            id="name"
            type="text"
            placeholder="Full Name"
            value={data.name}
            onChange={(e) => setData({ ...data, name: e.target.value })}
          />
          <Input
            marginTop="1.3rem"
            id="phone"
            type="text"
            placeholder="Phone Number"
            value={data.phone}
            onChange={(e) => setData({ ...data, phone: e.target.value })}
          />
          <Input
            marginTop="1.3rem"
            id="email"
            type="text"
            placeholder="Email Address"
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />
          <Input
            marginTop="1.3rem"
            id="subject"
            type="text"
            placeholder="Subject"
            value={data.subject}
            onChange={(e) => setData({ ...data, subject: e.target.value })}
          />
          <Textarea
            marginTop="1.3rem"
            id="message"
            type="textarea"
            placeholder="Message..."
            value={data.message}
            onChange={(e) => setData({ ...data, message: e.target.value })}
          />
          <Checkbox
            marginTop="1.3rem"
            id="pdpl"
            type="checkbox"
            placeholder="PDPL"
            isChecked={data.accept}
            onChange={handleAcceptChange}
          >
            <Text fontSize={{ base: "sm", sm: "md" }} color="gray.500">
              I accept the{" "}
              <Link href="/privacy-policy" target="_blank">
                Privacy Policy
              </Link>
              .
            </Text>
          </Checkbox>
        </FormControl>
        <Button
          type="submit"
          backgroundColor="#F9A61A"
          _hover={{ backgroundColor: "#C77F05" }}
          color="white"
          fontSize="md"
          padding="1rem"
          marginTop="2rem"
          disabled={isSubmitting || !validateForm()}
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </Button>
      </form>
    </Box>
  );
};

export default ContactForm;
