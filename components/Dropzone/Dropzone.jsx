"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { ArrowUpTrayIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { getSignature, saveToDatabase } from "@/actions/imageUpload";
import {
  Box,
  Button,
  Text,
  ListItem,
  UnorderedList,
  Container,
  useToast,
  useDisclosure,
} from "@chakra-ui/react";
import ProgressBar from "../ProgressBar/Progressbar";

const Dropzone = ({ className, onClose, onUpload }) => {
  const [files, setFiles] = useState([]);
  const [rejected, setRejected] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [progressValue, setProgressValue] = useState(0);
  const [publicId, setPublicId] = useState("");

  const toast = useToast();
  // const { isOpen, onOpen, onClose } = useDisclosure();

  const onDrop = useCallback((acceptedFiles, rejectedFiles) => {
    if (acceptedFiles?.length) {
      setFiles((previousFiles) => [
        // If allowing multiple files
        // ...previousFiles,
        ...acceptedFiles.map((file) =>
          Object.assign(file, { preview: URL.createObjectURL(file) })
        ),
      ]);
    }

    if (rejectedFiles?.length) {
      setRejected((previousFiles) => [...previousFiles, ...rejectedFiles]);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      "image/*": [],
    },
    maxSize: 1024 * 1000,
    maxFiles: 1,
    onDrop,
  });

  useEffect(() => {
    // Revoke the data uris to avoid memory leaks
    return () => files.forEach((file) => URL.revokeObjectURL(file.preview));
  }, [files]);

  const removeFile = (name) => {
    setFiles((files) => files.filter((file) => file.name !== name));
  };

  const removeAll = () => {
    setFiles([]);
    setRejected([]);
  };

  const removeRejected = (name) => {
    setRejected((files) => files.filter(({ file }) => file.name !== name));
  };

  const handleUpload = async () => {
    setUploading(true); // Start the uploading process
    setProgressValue(0); // Reset the progress value

    try {
      const file = files[0];
      if (!file) return;

      // get a signature using server action
      const { timestamp, signature } = await getSignature();

      // upload to cloudinary using the signature
      const formData = new FormData();

      formData.append("file", file);
      formData.append("api_key", process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY);
      formData.append("signature", signature);
      formData.append("timestamp", timestamp);
      formData.append("folder", "next");

      const endpoint = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_URL;
      const response = await fetch(endpoint, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        // Handle successful response
        setUploading(false);
        setProgressValue(0); // Reset progress
        setFiles([]); // Clear the files after successful upload
        toast({
          title: "Upload Successful",
          status: "success",
          duration: 3000, // Duration in milliseconds
          isClosable: true,
        });
        const data = await response.json();
        setPublicId(data.public_id);

        onUpload(publicId);
        onClose(); // Close the modal after successful upload
      } else {
        // Handle error response
        console.error("Upload error:", response.statusText);
        setUploading(false);
        setProgressValue(0); // Reset progress
      }
    } catch (error) {
      console.error("Upload error:", error);
      setUploading(false);
      setProgressValue(0); // Reset progress
    }
  };

  useEffect(() => {
    console.log("publicId changed:", publicId);
  }, [publicId]);

  return (
    <form action={handleUpload}>
      {/* Show Dropzone if file is not present */}
      {!files.length && (
        <Box
          {...getRootProps({
            className: className,
          })}
          marginBottom="2rem"
        >
          <input {...getInputProps({ name: "file" })} />
          <Box
            maxWidth="1280px"
            margin="0 auto"
            paddingX="2rem"
            paddingY="5rem"
            border="3px solid lightgray"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            gap="2rem"
          >
            <ArrowUpTrayIcon width="3rem" height="3rem" />
            {isDragActive ? (
              <p>Drop the files here ...</p>
            ) : (
              <p>Drag & drop files here, or click to select files</p>
            )}
          </Box>
        </Box>
      )}

      {/* Show Progress bar if uploading */}
      {uploading && (
        <Box marginTop="2rem">
          <Text fontSize="lg" fontWeight="semibold">
            Uploading...
          </Text>
          {/* You can use a progress bar library here */}
          <ProgressBar progressValue={progressValue} />
        </Box>
      )}

      {/* Show Preview if there is a file */}
      {files.length > 0 && (
        <Container marginTop="2rem">
          {/* Accepted files */}
          <Text
            marginTop="2rem"
            paddingBottom="2rem"
            fontSize="lg"
            fontWeight="semibold"
          >
            Accepted Files
          </Text>

          <UnorderedList marginTop="6">
            {files.map((file) => (
              <ListItem
                key={file.name}
                position="relative"
                height="32"
                rounded="md"
                shadow="lg"
              >
                <Image
                  src={file.preview}
                  alt={file.name}
                  width={100}
                  height={100}
                  onLoad={() => {
                    URL.revokeObjectURL(file.preview);
                  }}
                  objectFit="contain"
                />
                <Button
                  type="button"
                  position="absolute"
                  top="-3"
                  right="-3"
                  height="7"
                  width="7"
                  rounded="full"
                  border="1"
                  borderColor="red.400"
                  bg="red.400"
                  color="white"
                  transition="all 0.2s ease-in-out"
                  _hover={{
                    bg: "white",
                    borderColor: "rose.400",
                  }}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  onClick={() => removeFile(file.name)}
                >
                  <XMarkIcon height="10rem" width="10rem" />
                </Button>
                {/* <p className="mt-2 text-[12px] font-medium text-stone-500">
                {file.name}
              </p> */}
              </ListItem>
            ))}
          </UnorderedList>

          {/* Rejected Files */}
          <Text
            marginTop="1rem"
            paddingBottom="2rem"
            fontSize="lg"
            fontWeight="semibold"
          >
            Rejected Files
          </Text>
          <UnorderedList>
            {rejected.map(({ file, errors }) => (
              <ListItem
                key={file.name}
                display="flex"
                alignItems="flex-start"
                justifyContent="space-between"
              >
                <Box>
                  <Text marginTop="1rem" fontSize="sm">
                    {file.name}
                  </Text>
                  <UnorderedList className="text-[12px] text-red-400">
                    {errors.map((error) => (
                      <ListItem key={error.code}>{error.message}</ListItem>
                    ))}
                  </UnorderedList>
                </Box>
                <Button
                  type="button"
                  marginTop="1rem"
                  rounded="md"
                  onClick={() => removeRejected(file.name)}
                >
                  Remove
                </Button>
              </ListItem>
            ))}
          </UnorderedList>

          <Box display="flex" gap="4" alignItems="center">
            <Button colorScheme="red" onClick={removeAll}>
              Remove all files
            </Button>
            <Button colorScheme="purple" type="submit">
              Upload to Cloudinary
            </Button>
          </Box>
        </Container>
      )}
    </form>
  );
};

export default Dropzone;
