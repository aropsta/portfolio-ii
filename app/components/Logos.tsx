"use client";
import { Image, Box, HStack, keyframes, Flex } from "@chakra-ui/react";
import React, { useEffect, useRef } from "react";
const items = [
  "html.svg",
  "css.svg",
  "nextjs.svg",
  "javascript.svg",
  "typescript.svg",
  "tailwind.svg",
  "react.svg",
  "cplus.svg",
  "figma.svg",
  "git.svg",
  "java.svg",
  "bash.svg",
  "prisma.svg",
  "react-query.svg",
  "mysql.svg",
  "axios.svg",
  // Add more logo paths here
];

const Tech = () => {
  return (
    <Flex wrap="wrap" gap="2">
      {items.map((item, index) => (
        <Image
          key={index}
          height="3rem"
          src={`/${item}`}
          alt={item}
          maxWidth="9rem"
        />
      ))}
    </Flex>
  );
};

export default Tech;
