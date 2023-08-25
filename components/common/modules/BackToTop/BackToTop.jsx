"use client";
import { useEffect, useState } from "react";

import { Box } from "@chakra-ui/react";
import { FaArrowUp } from "react-icons/fa";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 800) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <>
      {isVisible && (
        <Box
          onClick={scrollToTop}
          position="fixed"
          bottom="20px"
          right={["16px", "84px"]}
          zIndex={3}
        >
          <Box
            backgroundColor="#F9A61A"
            padding="1rem"
            rounded="full"
            transition="0.3s ease-in-out"
            _hover={{ backgroundColor: "#C77F05", cursor: "pointer" }}
          >
            <FaArrowUp size="1rem" color="white" />
          </Box>
        </Box>
      )}
    </>
  );
}
