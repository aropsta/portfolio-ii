"use client";
import { Container, Flex, Heading, Stack } from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";
import React from "react";
import Carousel from "./components/Carousel";
import ProjectCard from "./components/ProjectCard";

export interface Project {
  title: string;
  description: string;
  img: string;
  git: string;
  site: string;
}

const first = {
  title: "Game hub Library",
  img: "/gamehub.png",
  description:
    "A project which demonstrates my ability to pull, manage and display data from a back-end API service. All displayed in a beautiful user interface. Tech: Typescript, Axios, React, ChakraUI, Zustand for state management",
  git: "https://github.com/aropsta/game-library/",
  site: "https://game-library-psi.vercel.app/",
};

const projects = [first];

const Projects = () => {
  return (
    <Flex
      className="w-[100%] h-full py-28"
      backgroundColor="gray.50"
      flexDirection="column"
    >
      <Container maxWidth="container.lg" className="flex gap-16 flex-col">
        <Heading>Projects</Heading>
        {projects.map((item, index) => (
          <ProjectCard key={index} project={item} />
        ))}
        <Carousel />
      </Container>
    </Flex>
  );
};

export default Projects;
