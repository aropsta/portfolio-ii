import React from "react";
import {
  Text,
  Box,
  Heading,
  Image,
  Flex,
  Container,
  Wrap,
  HStack,
} from "@chakra-ui/react";
import MorphContainer from "./components/MorphContainer";
import LinkedInLink from "./components/LinkedInLink";
import GitHubLink from "./components/GitHubLink";
import TechLogos from "./components/Logos";

const About = () => {
  return (
    <Flex id="about" className="w-[100%] py-28" flexDirection="column">
      <Container maxWidth="container.lg" className="flex gap-16 flex-col">
        <Flex className="sm:flex-row flex flex-col gap-2">
          <Box className="flex relative flex-col max-w-[36rem] gap-6" flex="5">
            <Heading as="h2" color="primary.400">
              ABOUT ME
            </Heading>
            <Text fontSize="xl" fontWeight="700">
              Front-end developer based in Melbourne, Australia 📍
            </Text>
            <Text color="#555" fontSize="lg">
              Hey, my name is Arob, and I'm a self-taught Frontend Developer. My
              passion is to bring forth products from designs and abstract
              ideas.
              <br />
              <br />
              My current tech stack is React/Next.js in combination with
              Tailwind CSS and TypeScript.
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
            flex="4"
            height="100%"
            objectFit="cover"
          ></Image>
          <div></div>
        </Flex>
      </Container>
    </Flex>
  );
};

export default About;
