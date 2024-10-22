import { Text, Box, Heading, Flex, Wrap } from "@chakra-ui/react";
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
      className="flex gap-16 sm:gap-32 flex-col"
    >
      <Flex className="sm:flex-row flex flex-col gap-8 sm:gap-4">
        <Box className="flex relative flex-col max-w-[36rem] gap-9">
          <Heading fontSize="3.5rem">Front-End React Developer 👋</Heading>
          <Text color="#555" fontSize="lg">
            Hi, I&apos;m Arob Deng. A passionate Front-end React Developer based
            in Melbourne, Australia. 📍
            <br />
            <br />
            My journey into software development has been driven by passion and
            practical experience rather than through academic training.
            <br />
            <br />
            Through Hands-on projects, I've built a solid foundation in modern
            web development, successfully deploying several production
            applications that serve real users.
          </Text>
          <Wrap as="span" className="self-center sm:self-start">
            <LinkedInLink />
            <GitHubLink />
          </Wrap>
        </Box>
        <MorphContainer>
          {/* <Image */}
          {/*   src="/port6.png" */}
          {/*   alt="portrait" */}
          {/*   className="overflow-hidden z-0 w-[100%] h-[100%] bg-contain" */}
          {/* ></Image> */}
        </MorphContainer>
      </Flex>
      <Flex flexDirection="row" className="" gap="4">
        {/* <Heading color="#2d2e32" as="h2" fontSize="2xl" fontWeight="500"> */}
        {/*   Tech */}
        {/* </Heading> */}
        <TechLogos />
      </Flex>
    </CustomContainer>
  );
}

export default Hero;
