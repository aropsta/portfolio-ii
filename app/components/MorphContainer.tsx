"use client";
import React from "react";
import { Text, Image, Box, Heading, Flex, keyframes } from "@chakra-ui/react";

const MorphContainer = ({ children }: { children: React.ReactNode }) => {
  const morph = keyframes`
  0% {
    border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
  }
  50% {
    border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
  }
  100% {
    border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
  }
`;
  return (
    <Box
      boxShadow="outline"
      zIndex="10"
      // backgroundColor="gray"
      backgroundImage="url('/port6.png')"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      height="25rem"
      width="25rem"
      borderRadius="60% 40% 30% 70% / 60% 30% 70% 40%"
      animation={`${morph} 8s ease-in-out infinite`}
    >
      {children}
    </Box>
  );
};

export default MorphContainer;
