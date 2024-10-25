"use client";
import React from "react";
import { Text, Box, Heading, Image, Flex, HStack } from "@chakra-ui/react";
import LinkedInLink from "./components/LinkedInLink";
import GitHubLink from "./components/GitHubLink";
import CustomContainer from "./components/CustomContainer";
// import { logos } from "./components/TechLogos";

const About = () => {
  //TODO: image size/flex proportion on chrome
  //

  // function getPath(name: string) {
  //   const logo = logos.find((item) => item.label === name);
  //   return logo ? logo.file : "default.svg"; // Return a default if not found
  // }
  // const items = [
  //   "TypeScript",
  //   "Next.js",
  //   "Tailwind CSS",
  //   "Prisma ORM",
  //   "MySQL",
  //   "React.js",
  // ];
  return (
    <CustomContainer className="flex gap-1 flex-col" bgColor="white">
      <Flex className="sm:flex-row flex flex-col gap-6">
        <Box className="flex relative flex-col gap-6 flex-1 sm:w-[50%]">
          <Heading as="h2" color="primary.400" id="about">
            ABOUT ME
          </Heading>
          <Text fontSize="xl" fontWeight="700">
            Hey, I&apos;m Arob, a Front-end developer based in Melbourne,
            Australia 📍
          </Text>
          <Text color="#555" fontSize="lg">
            While my path may not be an academic one, my commitment to writing
            clear, tested code and solving real-world problems has enabled me to
            contribute meaningfully to production codebases.
            <br />
            <br />
            My unique perspective has been shaped by independent learning, a
            strong problem-solving mindset, and a proven ability to turn
            concepts into working solutions.
            <br />
            <br />
            <strong>I use arch btw</strong>
            <br />
            <br />
          </Text>
          {/* <HStack> */}
          {/*   <Text fontSize="lg" color="#555"> */}
          {/*     Current tech stack */}
          {/*   </Text> */}
          {/*   {items.map((item, index) => ( */}
          {/*     <Tooltip label={item} hasArrow key={index}> */}
          {/*       <Image */}
          {/*         src={getPath(item)} */}
          {/*         fontWeight="700" */}
          {/*         maxHeight="2rem" */}
          {/*         color="primary.900" */}
          {/*         maxWidth="6rem" */}
          {/*         alignSelf="center" */}
          {/*         alt={item} */}
          {/*       /> */}
          {/*     </Tooltip> */}
          {/*   ))} */}
          {/* </HStack> */}
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
          objectFit="contain"
          className="sm:w-[50%] flex-1"
        ></Image>
      </Flex>
    </CustomContainer>
  );
};

export default About;
