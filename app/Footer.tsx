import { Container, Flex } from "@chakra-ui/react";
import React from "react";
import GitHubLink from "./components/GitHubLink";
import LinkedInLink from "./components/LinkedInLink";

const Footer = () => {
  return (
    <Flex
      className="w-[100%] py-14"
      backgroundColor="rgb(45, 46, 50)"
      flexDirection="column"
    >
      <Container maxWidth="container.lg" className="flex gap-10 justify-center">
        <LinkedInLink fill="white" />
        <GitHubLink fill="white" />
      </Container>
    </Flex>
  );
};

export default Footer;
