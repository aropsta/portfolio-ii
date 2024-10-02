import React from "react";
import { Text, Box, Heading, Flex, Container, Wrap } from "@chakra-ui/react";
import MorphContainer from "./components/MorphContainer";
import LinkedInLink from "./components/LinkedInLink";
import GitHubLink from "./components/GitHubLink";
import TechLogos from "./components/Logos";

const About = () => {
  return (
    <Flex className="w-[100%] py-28" flexDirection="column">
      <Container maxWidth="container.lg" className="flex gap-16 flex-col">
        <Flex className="sm:flex-row flex flex-col gap-4">
          <Box className="flex relative flex-col max-w-[36rem] gap-6">
            <Heading as="h2" color="primary.400" id="about">
              ABOUT ME
            </Heading>
            <Text fontSize="xl" fontWeight="700">
              Front-end Developer based in Melbourne, Australia 📍
            </Text>
            <Text color="#555" fontSize="lg">
              Hey, my name is Arob, and I'm a self-taught Frontend Developer. My
              passion is to create concrete products from abstract ideas. <br />
              <br />
              My current tech stack is React/Next.js in combination with
              Tailwind CSS and TypeScript.
              <br />
              <br />I also have experience in creating ergonomic user interfaces
              using Figma
            </Text>
          </Box>
          <Flex>
            {/* <Image */}
            {/*   src="/port6.png" */}
            {/*   alt="portrait" */}
            {/*   className="overflow-hidden z-0 w-[100%] h-[100%] bg-contain" */}
            {/* ></Image> */}
            <div></div>
          </Flex>
        </Flex>
      </Container>
    </Flex>
  );
};

export default About;
