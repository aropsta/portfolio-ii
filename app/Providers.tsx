"use client";

import { ChakraProvider, extendTheme } from "@chakra-ui/react";

//custom colors for ChakraUI
const colors = {
  primary: {
    50: "hsl(212, 100%, 95%)",
    100: "hsl(212, 80%, 53%)",
    200: "hsl(212, 85%, 60%)",
    300: "hsl(212, 90%, 65%)",
    400: "hsl(212, 95%, 53%, 1)",
    500: "hsl(212, 100%, 50%)",
    600: "hsl(212, 90%, 45%)",
    700: "hsl(212, 80%, 40%)",
    800: "hsl(212, 70%, 35%)",
    900: "hsl(212, 60%, 30%)",
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
