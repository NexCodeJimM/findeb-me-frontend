import {
  Box,
  Checkbox,
  FormControl,
  Input,
  Textarea,
  Text,
  Button,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <Box
      width="100%"
      borderRadius="sm"
      backgroundColor="white"
      color="gray.700"
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl>
          <Input
            marginTop="1.3rem"
            id="name"
            type="text"
            placeholder="Full Name"
            {...register("name", { required: true })}
          />
          <Input
            marginTop="1.3rem"
            id="email"
            type="text"
            placeholder="Email Address"
            {...register("email", { required: true })}
          />
          <Input
            marginTop="1.3rem"
            id="phone"
            type="text"
            placeholder="Phone Number"
            {...register("phone", { required: true })}
          />
          <Textarea
            marginTop="1.3rem"
            id="message"
            type="textarea"
            placeholder="Message..."
            {...register("message", { required: true })}
          />
          <Checkbox
            marginTop="1.3rem"
            id="pdpl"
            type="checkbox"
            placeholder="PDPL"
            {...register("pdpl", { required: true })}
          >
            <Text fontSize="1rem" color="gray.500">
              I accept the Privacy Policy and Terms of Service.
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
        >
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default ContactForm;
