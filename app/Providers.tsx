"use client";

import { ChakraProvider, extendTheme } from "@chakra-ui/react";

//custom colors for ChakraUI
const colors = {
  primary: {
    400: "#147efb",
  },
  gray: {
    50: "#f9f9f9",
  },
};
//custom fonts
const fonts = {
  heading: `'Poppins', sans-serif`,
  body: `'Poppins', sans-serif`,
};

// Extend the theme to include custom colors, fonts, etc
const theme = extendTheme({
  colors,
  fonts,
});

export function Providers({ children }: { children: React.ReactNode }) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}
