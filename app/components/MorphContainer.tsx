"use client";
import React from "react";
import { Text, Image, Box, Heading, Flex, keyframes } from "@chakra-ui/react";

const MorphContainer = () => {
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
      backgroundImage="url('/port.jpg')"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="110%"
      height="22rem"
      width="22rem"
      borderRadius="60% 40% 30% 70% / 60% 30% 70% 40%"
      animation={`${morph} 8s ease-in-out infinite`}
    ></Box>
  );
};

export default MorphContainer;
