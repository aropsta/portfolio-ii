"use client";
import { Divider, Flex, Heading } from "@chakra-ui/react";
import React from "react";
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
      "A sophisticated web app showcasing frontend API management with advanced global state mangement and data caching using Zustand and React Query. RAWG API was used to get game information from a backend server. A fully featured project with sorting, pagination, filtering and error and load states handling and efficient data handling",
    git: "https://github.com/aropsta/game-library/",
    site: "https://game-library-psi.vercel.app/",
    tech: [
      "React.js",
      "TypeScript",
      "Chakra UI",
      "Axios",
      "React Query",
      "Zustand",
    ],
  },
  {
    title: "Issue tracker",
    img: "/issue-tracker.png",
    description:
      "A fullstack business management application used to track and manage different tickets, feature requests, issues or bugs. Features enterprise-grade authentication using NextAuth, a scalable databse solution using MySQL and Prisma ORM and a sophisticated frontend UI created with React and Radix UI",
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
      "NextAuth.js",
      "Axios",
    ],
  },
  {
    title: "Visual Algorithms",
    img: "/visual.png",
    description:
      "A project to visually showcase sorting algorithms executing in real-time",
    git: "https://github.com/aropsta/visual-algorithms/",
    site: "https://visual-algorithms-seven.vercel.app/",
    tech: ["React.js", "TypeScript", "D3"],
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
        {projectList.slice(0, 3).map((item, index) => (
          <ProjectCard key={index} project={item} />
        ))}
      </Flex>

      <Divider colorScheme="primary" />

      <Carousel items={projectList} />
    </CustomContainer>
  );
};

export default Projects;
