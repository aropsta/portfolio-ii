"use client";
import React from "react";
import { Box, keyframes } from "@chakra-ui/react";

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
      boxShadow="dark-lg"
      zIndex="10"
      // backgroundColor="gray"
      backgroundImage="url('/port.png')"
      backgroundPosition="50% 80%"
      backgroundRepeat="no-repeat"
      backgroundSize="100%"
      borderRadius="60% 40% 30% 70% / 60% 30% 70% 40%"
      animation={`${morph} 8s ease-in-out infinite`}
      className="h-[16rem] w-[16rem] self-center sm:h-[22rem] sm:w-[40%]"
    ></Box>
  );
};

export default MorphContainer;
