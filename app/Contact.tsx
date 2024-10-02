"use client";
import React from "react";
import {
  Text,
  Box,
  Textarea,
  Heading,
  Flex,
  Container,
  Wrap,
  FormControl,
  FormLabel,
  Input,
  Card,
  Button,
} from "@chakra-ui/react";

const Contact = () => {
  function handleSubmit() {}
  return (
    <Flex
      className="w-[100%] h-full py-28"
      backgroundColor="white"
      flexDirection="column"
    >
      <Container maxWidth="container.lg" className="flex gap-16 flex-col">
        <Card p="10" alignSelf="center" gap="8">
          <Heading id="contact" color="primary.400">
            Contact me
          </Heading>
          <FormControl className="flex gap-2 flex-col">
            <FormLabel>Name</FormLabel>
            <Input placeholder="Name" required />
            <FormLabel>Email</FormLabel>
            <Input placeholder="Email" required type="email" />
            <FormLabel>Phone</FormLabel>
            <Input placeholder="Phone number" type="tel" />
            <FormLabel>Company</FormLabel>
            <Input placeholder="Company" />
            <FormLabel>Message</FormLabel>
            <Textarea placeholder="Enter your message" />
            <Button>Submit</Button>
          </FormControl>
        </Card>
      </Container>
    </Flex>
  );
};

export default Contact;
