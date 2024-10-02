"use client";
import React, { useState } from "react";
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
  FormHelperText,
  FormErrorMessage,
} from "@chakra-ui/react";

import { useForm } from "react-hook-form";
// const formValidation = z.Object({
//   name: z
//     .string()
//     .min(2, "Name greater than 2 characters is required")
//     .max(255),
//   email: z.string().max(255),
//   message: z
//     .string()
//     .min(2, "A message greater than 2 characters is required")
//     .max(63333),
// });

const Contact = () => {
  //TODO: handle submit and form validation
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const [error, setError] = useState(false);

  const onSubmit = handleSubmit(async (data) => {
    console.log("onSubmit()");
    try {
      console.log("onSubmit()");
      // setSubmitting(true);
      //...
      //
      reset();
      // setSubmitting(true);
    } catch (err) {
      setError(true);
      // setSubmitting(false);
    }
  });
  return (
    <Flex
      className="w-[100%] h-full py-28"
      backgroundColor="white"
      flexDirection="column"
      id="contact"
    >
      <Container maxWidth="container.lg" className="flex gap-16 flex-col">
        <Card p="10" alignSelf="center" gap="8">
          <Heading color="primary.400">Contact me</Heading>
          <form onSubmit={onSubmit} className="flex gap-2 flex-col">
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input placeholder="Name" />
              {errors && (
                <FormErrorMessage>Email is required.</FormErrorMessage>
              )}
            </FormControl>

            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input placeholder="Email" />
            </FormControl>
            <FormControl>
              <FormLabel>Phone</FormLabel>
              <Input placeholder="Phone number" type="tel" />
            </FormControl>
            <FormControl>
              <FormLabel>Company</FormLabel>

              <Input placeholder="Company" {...register("company")} />
            </FormControl>
            <FormControl>
              <FormLabel>Message</FormLabel>
              <Textarea placeholder="Enter your message" />
            </FormControl>

            <Button
              variant="solid"
              type="submit"
              colorScheme="primary"
              maxWidth="max-content"
              alignSelf="center"
            >
              Send
            </Button>
          </form>
        </Card>
      </Container>
    </Flex>
  );
};

export default Contact;
