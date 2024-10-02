import React from "react";
import {
  Text,
  Image,
  CardFooter,
  ButtonGroup,
  Card,
  CardBody,
  Heading,
  Stack,
} from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";
import { ProjectItem } from "../Projects";
import { ExternalLinkIcon } from "@chakra-ui/icons";

interface Props {
  project: ProjectItem;
}

const ProjectCard = ({ project }: Props) => {
  return (
    <Card
      maxW="sm"
      padding="3"
      variant="elevated"
      _hover={{
        transform: "scale(1.05)",
        transition: "all 0.24s ease",
      }}
    >
      <CardBody>
        <Image
          src={project.img}
          alt="Screenshot of website"
          borderRadius="sm"
        />
        <Stack mt="6" spacing="3">
          <Heading fontSize="xl">{project.title}</Heading>
          <Text color="#555">{project.description}</Text>
        </Stack>
      </CardBody>
      <CardFooter>
        <ButtonGroup spacing="4" fontWeight="600">
          <Link
            href={project.git}
            variant="solid"
            referrerPolicy="no-referrer"
            color="primary.400"
            verticalAlign="center"
            target="_blank"
          >
            Github
            <ExternalLinkIcon mx="2px" textAlign="center" />
          </Link>
          <Link
            href={project.site}
            variant="solid"
            color="primary.400"
            target="_blank"
          >
            Active site
            <ExternalLinkIcon mx="2px" textAlign="center" />
          </Link>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
