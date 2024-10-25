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
          <Heading fontSize="3.5rem">Front-End React Developer 👋</Heading>
          <Text color="#555" fontSize="lg">
            Hey, I&apos;m Arob, a Front-end developer based in Melbourne,
            Australia 📍
            <br />
            <br />
            My journey into software development has been driven by passion and
            practical experience rather than through academic training.
          </Text>

          <Text color="#555" fontSize="lg">
            Through hands-on projects, I&apos;ve built a solid foundation in
            modern web development technologies,{" "}
            <strong>
              successfully deploying several production applications that can
              serve real users.
            </strong>
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
          {/* <Heading color="#2d2e32" as="h2" fontSize="2xl" fontWeight="500"> */}
          {/*   Tech */}
          {/* </Heading> */}
          <TechLogos />
        </Flex>
      </VStack>
    </CustomContainer>
  );
}

export default Hero;
