import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  textStyles: {
    h1: {
      fontFamily: "Aileron",
      lineHeight: "110%",
      fontWeight: "extrabold",
    },
    button: {
      fontFamily: "Aileron",
      fontWeight: "semibold",
    },
    sectionHeader: {
      fontFamily: "Aileron",
      fontWeight: "bold",
    },
    sectionBody: {
      fontFamily: "Roboto",
      fontWeight: "light",
    },
  },
  fonts: {
    Aileron: `'Aileron', sans-serif`,
    Roboto: `'Roboto', sans-serif`,
  },
});

export default theme;
