"use client";
import {
  Container,
  Divider,
  Flex,
  Heading,
  Stack,
  Wrap,
} from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";
import React from "react";
import Slideshow from "./components/ImageSlideshow";
import ProjectCard from "./components/ProjectCard";
import Carousel from "./components/Carousel";
import CustomContainer from "./components/CustomContainer";

export interface ProjectItem {
  title: string;
  description: string;
  img: string;
  git: string;
  site: string;
  tech?: string[];
}

export const projectList: ProjectItem[] = [
  {
    title: "Game hub",
    img: "/gamehub.png",
    description:
      "A project which demonstrates my ability to pull, manage and display data from a back-end API service. All displayed in a beautiful user interface. Tech: Typescript, Axios, React, ChakraUI, Zustand for state management",
    git: "https://github.com/aropsta/game-library/",
    site: "https://game-library-psi.vercel.app/",
    tech: [
      "React.js",
      "TypeScript",
      "Chakra UI",
      "Axios",
      "React Query",
      "zustand",
    ],
  },
  {
    title: "Ticket tracker",
    img: "/issue-tracker.png",
    description:
      "A fullstack application used to track and manage different tickets, feature requests, issues or bugs",
    git: "https://github.com/aropsta/issue-tracker/",
    site: "https://issue-tracker-iwav.vercel.app/",
    tech: [
      "React.js",
      "TypeScript",
      "Radix UI",
      "Tailwind CSS",
      "Next.js",
      "React Hook Form",
      "MySQL",
      "Prisma ORM",
      "nextauth.js",
      "Axios",
    ],
  },
  {
    title: "Time tracking dashboard",
    img: "/time-tracking.jpg",
    description: "",
    site: "https://time-tracking-dashboard-main-beta.vercel.app/",
    git: "https://github.com/aropsta/time-tracking-dashboard-main",
  },
  {
    title: "Base apparel",
    site: "https://aropsta.github.io/base-apparel-coming-soon-master/",
    git: "https://github.com/aropsta/base-apparel-coming-soon-master",
    img: "/base-apparel.jpg",
    description: "",
  },
  {
    title: "Tip calculator",
    site: "https://aropsta.github.io/tip-calculator-app-main/",
    git: "https://github.com/aropsta/tip-calculator-app-main",
    img: "/tip-calculator.jpg",
    description: "",
  },
  {
    title: "Four-card feature section",
    site: "https://aropsta.github.io/four-card-feature-section-master/",
    git: "https://github.com/aropsta/four-card-feature-section-master",
    img: "/four-card.jpg",
    description: "",
  },
  {
    title: "Three-column preview card",
    site: "https://aropsta.github.io/3-column-preview-card-component-main/",
    git: "https://github.com/aropsta/3-column-preview-card-component-main",
    img: "/three-column.jpg",
    description: "",
  },
  {
    title: "Single price grid component",
    site: "https://aropsta.github.io/single-price-grid-component-master/",
    git: "https://github.com/aropsta/single-price-grid-component-master",
    img: "/single-price.jpg",
    description: "",
  },
  {
    title: "Order summary component",
    site: "https://aropsta.github.io/order-summary-component-main/",
    git: "https://github.com/aropsta/order-summary-component-main",
    img: "/order-summary.jpg",
    description: "",
  },
];

const Projects = () => {
  return (
    <CustomContainer bgColor="gray.50" className="flex gap-8 flex-col">
      <Heading color="primary.400" id="projects">
        Projects
      </Heading>
      <Flex justifyContent="center" gap="4" wrap="wrap">
        {projectList.slice(0, 2).map((item, index) => (
          <ProjectCard key={index} project={item} />
        ))}
      </Flex>

      <Divider colorScheme="primary" />

      <Carousel items={projectList} />
    </CustomContainer>
  );
};

export default Projects;
