import {
  Image,
  Flex,
  Tooltip,
  Text,
  Tag,
  HStack,
  Heading,
} from "@chakra-ui/react";
import React from "react";
import { logos } from "./TechLogos";

type Items = {
  label: string;
  file: string;
};

interface Props {
  items: string[];
}

// utils.ts
export const getLogoFilePath = (label: string): string => {
  const logo = logos.find((item) => item.label === label);
  return logo ? logo.file : "default.svg"; // Return a default if not found
};

export default function TechStack({ items }: Props) {
  return (
    <Flex wrap="wrap" gap="2" justifyContent="start" alignItems="center">
      <Text
        fontWeight="600"
        borderRight="solid 1px"
        borderColor="gray.400"
        paddingRight="2"
        color="primary.900"
      >
        Tech
      </Text>
      {items.map((item, index) => (
        <Tooltip label={item} hasArrow key={index}>
          <Image
            src={getLogoFilePath(item)}
            fontWeight="700"
            maxHeight="2rem"
            color="primary.900"
            maxWidth="6rem"
            alignSelf="center"
            alt={item}
          />
        </Tooltip>
      ))}
    </Flex>
  );
}
