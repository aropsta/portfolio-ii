import React from "react";
import {
  Text,
  Image,
  Divider,
  CardFooter,
  ButtonGroup,
  Button,
  Card,
  CardBody,
  Container,
  Flex,
  Heading,
  Stack,
} from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";
import { Project } from "../Projects";

interface Props {
  project: Project;
}

const ProjectCard = ({ project }: Props) => {
  return (
    <Card
      maxW="sm"
      _hover={{
        transform: "scale(1.05)",
        transition: "all 0.2s ease",
      }}
    >
      <CardBody>
        <Image
          src={project.img}
          alt="Screenshot of website"
          borderRadius="lg"
        />
        <Stack mt="6" spacing="3">
          <Heading size="md">{project.title}</Heading>
          <Text>{project.description}</Text>
        </Stack>
      </CardBody>
      <CardFooter>
        <ButtonGroup spacing="2">
          <Button>
            <Link href={project.git} variant="solid">
              Github
            </Link>
          </Button>
          <Button>
            <Link href={project.site} variant="solid">
              LinkedIn
            </Link>
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
