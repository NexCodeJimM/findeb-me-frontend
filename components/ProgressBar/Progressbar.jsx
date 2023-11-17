"use client";
import { Box } from "@chakra-ui/react"; // You can adjust the import as per your UI library

const ProgressBar = ({ progressValue }) => {
  const progressBarStyles = {
    width: `${progressValue}%`,
    height: "10px",
    backgroundColor: "#3498db",
    transition: "width 0.2s ease-in-out",
  };

  return (
    <Box
      width="100%"
      height="10px"
      backgroundColor="#ccc"
      borderRadius="5px"
      overflow="hidden"
    >
      <Box style={progressBarStyles}></Box>
    </Box>
  );
};

export default ProgressBar;
