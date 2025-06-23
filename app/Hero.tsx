import {
  VStack,
  Text,
  Box,
  Heading,
  Flex,
  Wrap,
  Divider,
} from "@chakra-ui/react";
import MorphContainer from "./components/MorphContainer";
import LinkedInLink from "./components/LinkedInLink";
import GitHubLink from "./components/GitHubLink";
import TechLogos from "./components/TechLogos";
import React from "react";
import CustomContainer from "./components/CustomContainer";

function Hero() {
  return (
    <CustomContainer
      bgColor="gray.50"
      className="flex gap-16 sm:gap-20 flex-col"
    >
      <Flex className="sm:flex-row flex flex-col gap-8 sm:gap-4">
        <Box className="flex relative flex-col max-w-[36rem] gap-9 sm:w-[60%]">
          <Heading fontSize="3.5rem">
            Senior Full-Stack Engineer & System Architect 👋
          </Heading>

          <Text color="#555" fontSize="lg">
            I build production systems from algorithms to infrastructure —
            currently operating a live price comparison platform processing
            complex data matching for Australian retailers.
          </Text>

          <Text color="#555" fontSize="lg">
            I design and deploy complete data-driven applications that solve
            real business problems. My latest production system features
            sophisticated product matching algorithms, real-time price
            processing, and runs on custom Kubernetes infrastructure with
            comprehensive monitoring — all designed, built, and operated
            independently.
          </Text>

          <Wrap as="span" className="self-center sm:self-start">
            <LinkedInLink />
            <GitHubLink />
          </Wrap>
        </Box>
        <MorphContainer />
      </Flex>
      <VStack>
        <Divider colorScheme="primary" />

        <Flex flexDirection="row" className="" gap="4">
          <TechLogos />
        </Flex>
      </VStack>
    </CustomContainer>
  );
}

export default Hero;
