"use client";

import { ChakraProvider, extendTheme } from "@chakra-ui/react";

//custom colors for ChakraUI
const colors = {
  primary: {
    100: "hsl(212,80%,53%)",
    400: "hsl(212, 95%, 53%, 1)",
  },
  gray: {
    50: "#f9f9f9",
  },
};
//custom fonts
//TODO: Make sure emojjis appear proprrly on chrome
const fonts = {
  heading: `'Poppins Variable', 'Poppins', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji', 'Apple Color Emoji', 'Twemoji Mozilla', sans-serif`,
  body: `'Poppins Variable', 'Poppins', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji', 'Apple Color Emoji', 'Twemoji Mozilla', sans-serif`,
};
// Extend the theme to include custom colors, fonts, etc
const theme = extendTheme({
  colors,
  fonts,
});

export function Providers({ children }: { children: React.ReactNode }) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}
