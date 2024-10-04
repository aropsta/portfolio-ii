import React from "react";
import {
  Text,
  Box,
  Heading,
  Image,
  Flex,
  Container,
  HStack,
} from "@chakra-ui/react";
import LinkedInLink from "./components/LinkedInLink";
import GitHubLink from "./components/GitHubLink";
import CustomContainer from "./components/CustomContainer";

const About = () => {
  //TODO: image size/flex proportion on chrome
  return (
    <CustomContainer className="flex gap-1 flex-col" bgColor="white">
      <Flex className="sm:flex-row flex flex-col gap-6">
        <Box className="flex relative flex-col max-w-[36rem] gap-6 flex-1">
          <Heading as="h2" color="primary.400">
            ABOUT ME
          </Heading>
          <Text fontSize="xl" fontWeight="700">
            Front-end developer based in Melbourne, Australia 📍
          </Text>
          <Text color="#555" fontSize="lg">
            Hey, my name is Arob, and I'm a self-taught Frontend Developer. My
            passion is to bring forth products from designs and abstract ideas.
            <br />
            <br />
            My current tech stack is React/Next.js in combination with Tailwind
            CSS and TypeScript.
            <br />
          </Text>
          <HStack>
            <LinkedInLink height="2.5rem" width="2.5rem" />
            <GitHubLink height="2.5rem" width="2.5rem" />
          </HStack>
        </Box>
        <Image
          src="/nvim.png"
          alt="Nvim screenshot"
          borderRadius="md"
          alignSelf="center"
          width="100%"
          height="100%"
          objectFit="contain"
          className="flex-1"
        ></Image>
        <div></div>
      </Flex>
    </CustomContainer>
  );
};

export default About;
