import React from "react";
import { Text, Image, Card, CardBody, Heading, Stack } from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";
import { ProjectItem } from "../Projects";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import TechStack from "./TechStack";

interface Props {
  project: ProjectItem;
}

//TODO: add a component to show techstack svg's for
const ProjectCard = ({ project }: Props) => {
  return (
    <Card
      maxW="sm"
      padding="3"
      variant="elevated"
      className="sm:hover:scale-105 transition-transform ease duration-300"
    >
      <CardBody>
        <Image
          src={project.img}
          alt="Screenshot of website"
          borderRadius="sm"
        />
        <Stack mt="6" spacing="3">
          <Link
            href={project.site}
            referrerPolicy="no-referrer"
            color="primary.400"
            target="_blank"
          >
            <Heading fontSize="xl" color="primary.600">
              {project.title}
            </Heading>
          </Link>

          <Text color="#555">{project.description}</Text>
          <Link
            href={project.git}
            variant="solid"
            referrerPolicy="no-referrer"
            color="primary.400"
            target="_blank"
          >
            Github code
            <ExternalLinkIcon mx="2px" textAlign="center" />
          </Link>
          <TechStack items={project.tech!} />
        </Stack>
      </CardBody>
    </Card>
  );
};

export default ProjectCard;
