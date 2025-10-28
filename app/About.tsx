"use client";
import React from "react";
import { Text, Box, Heading, Flex, HStack } from "@chakra-ui/react";
import LinkedInLink from "./components/LinkedInLink";
import GitHubLink from "./components/GitHubLink";
import CustomContainer from "./components/CustomContainer";
import ClickableImage from "./components/ClickableImage";

const About = () => {
  return (
    <CustomContainer className="flex gap-1 flex-col" bgColor="white">
      <Flex className="sm:flex-row flex flex-col gap-6">
        <Box className="flex relative flex-col gap-6 flex-1 sm:w-[50%]">
          <Heading as="h2" color="primary.400" id="about">
            ABOUT ME
          </Heading>
          <Text fontSize="xl" fontWeight="700">
            Hey, I&apos;m Arob, a Full-Stack Engineer based in Melbourne,
            Australia 📍
          </Text>
          <Text color="#555" fontSize="lg">
            I focus on building and running production-ready systems that tackle
            real-world business challenges. Coming into software engineering
            through a non-traditional path has given me a different lens—one
            that’s grounded in building practical, scalable solutions that
            actually make a difference.
            <br />
            <br />
            Recently, I’ve built and launched a robust price comparison platform
            that pulls in data from some of Australia’s largest retailers. It
            handles complex product matching, real-time data processing, and
            manages thousands of products every day. The entire system runs on a
            custom Kubernetes setup I designed, with full monitoring,
            resilience, and disaster recovery baked in.
            <br />
            <br />
            My approach combines technical depth with business awareness,
            focusing on solutions that work in production under real
            constraints. From database design and matching algorithms to
            Kubernetes operations and payment processing, I take end-to-end
            ownership of the systems I build, including comprehensive
            documentation for maintainability and disaster recovery.
            <br />
            <br />
            <strong>I use arch btw</strong>
            <br />
            <br />
          </Text>
          <HStack>
            <LinkedInLink height="2.5rem" width="2.5rem" />
            <GitHubLink height="2.5rem" width="2.5rem" />
          </HStack>
        </Box>

        <Box className="sm:w-[50%] flex-1 space-y-4 self-center">
          <ClickableImage
            src="/nvim.png"
            alt="Development environment with Neovim"
            caption="Development environment"
          />
          <ClickableImage
            src="/grafana-dashboard.png"
            alt="Production monitoring dashboard showing system metrics"
            caption="Live production monitoring and alerting"
          />
        </Box>
      </Flex>
    </CustomContainer>
  );
};

export default About;
