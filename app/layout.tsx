import type { Metadata } from "next";
import { Providers } from "./Providers";
import "./globals.css";
import Navbar from "./Navbar";

import "@fontsource/noto-sans";
// import "@fontsource/apple-color-emoji";
import "twemoji";

// Import Poppins font
import "@fontsource/poppins/100.css";
import "@fontsource/poppins/200.css";
import "@fontsource/poppins/300.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import "@fontsource/poppins/800.css";
import "@fontsource/poppins/900.css";

export const metadata: Metadata = {
  title: "Arob Deng | Portfolio ",
  description: "Developer showcase and introductions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
