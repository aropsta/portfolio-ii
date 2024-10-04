import { Flex, Container } from "@chakra-ui/react";
import React from "react";

interface Props {
  children: React.ReactNode;
  className: string;
  bgColor: string;
}

const CustomContainer = ({ bgColor, children, className }: Props) => {
  return (
    <Flex
      backgroundColor={bgColor}
      className="w-[100%] py-10 sm:py-28"
      flexDirection="column"
    >
      <Container maxWidth="container.lg" className={className}>
        {children}
      </Container>
    </Flex>
  );
};

export default CustomContainer;
