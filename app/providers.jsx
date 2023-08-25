"use client";

import "@fontsource/aileron/100.css";
import "@fontsource/aileron/300.css";
import "@fontsource/aileron/400.css";
import "@fontsource/aileron/600.css";
import "@fontsource/aileron/700.css";
import "@fontsource/aileron/800.css";
import "@fontsource/roboto/100.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "@fontsource/roboto/900.css";

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "@/utils/theme";

export function Providers({ children }) {
  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </CacheProvider>
  );
}
