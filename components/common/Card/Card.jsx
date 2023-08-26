import { Box, Text, Image } from "@chakra-ui/react";
import { useState } from "react";

const Card = ({ title, description, icon }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(!isHovered);
  };

  return (
    <Box
      backgroundColor="gray.100"
      shadow="lg"
      borderRadius="md"
      position="relative"
      overflow="hidden"
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
    >
      <Box marginBottom="1rem">
        <Image
          src={icon}
          width="500px" // Set the desired width
          height="150px" // Set the desired height
          objectFit="cover" // or "contain" based on your preference
          roundedTop="md"
          alt={title}
          style={{
            filter: isHovered ? "grayscale(0)" : "grayscale(100%)",
            transition: "filter 0.3s ease-in-out",
          }}
          loading="eager"
        />
      </Box>
      <Box paddingX="1rem">
        <Text
          fontFamily="Roboto"
          fontWeight="medium"
          fontSize="lg"
          paddingBottom="1rem"
          color="#F9A61A"
        >
          {title}
        </Text>
      </Box>

      <Box>
        <Text>{description}</Text>
      </Box>
    </Box>
  );
};

export default Card;
