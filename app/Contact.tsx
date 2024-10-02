"use client";
import React, { useState } from "react";
import {
  Text,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
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
  Spinner,
} from "@chakra-ui/react";

import { FieldError, FieldErrorsImpl, Merge, useForm } from "react-hook-form";
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
    getValues,
    formState: { errors, isSubmitting, isSubmitSuccessful, isDirty, isValid },
  } = useForm();

  const [error, setError] = useState(false);

  const onSubmit = handleSubmit(async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log("onSubmit()");
      console.log(getValues());
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

  const SendResultAlert = () => {
    return (
      isSubmitSuccessful && (
        <Alert status="success">
          <AlertIcon />
          <AlertTitle>Success!</AlertTitle>
          <AlertDescription>
            If I don't respond in a few days then feel free to contact me first.
            I'm on linkedIn and my contact information is also on my resume
          </AlertDescription>
        </Alert>
      )
    );
  };

  function ErrorMessage(message: string | undefined) {
    return <FormErrorMessage>{message}</FormErrorMessage>;
  }

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
            {SendResultAlert()}
            <FormControl isInvalid={!!errors.name}>
              <FormLabel>Name</FormLabel>
              <Input
                placeholder="Name"
                {...register("name", {
                  required: "A name is required",
                })}
              />
              {!!errors.name && ErrorMessage(errors?.name?.message?.toString())}
            </FormControl>

            <FormControl isInvalid={!!errors.email}>
              <FormLabel>Email</FormLabel>
              <Input
                placeholder="Email"
                type="email"
                {...register("email", { required: "An email is required" })}
              />
              {!!errors.email &&
                ErrorMessage(errors?.email?.message?.toString())}
            </FormControl>
            <FormControl>
              <FormLabel>Phone</FormLabel>
              <Input
                placeholder="Phone number"
                type="tel"
                {...register("phone")}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Company</FormLabel>

              <Input placeholder="Company" {...register("company")} />
            </FormControl>
            <FormControl isInvalid={!!errors.message}>
              <FormLabel>Message</FormLabel>
              <Textarea
                placeholder="Enter your message"
                {...register("message", {
                  required: "A message is required",
                  minLength: {
                    value: 20,
                    message: "Message must be at least 20 characters",
                  },
                })}
              />
              {!!errors.message &&
                ErrorMessage(errors?.message?.message?.toString())}
            </FormControl>

            <Button
              variant="solid"
              type="submit"
              isDisabled={isSubmitting}
              colorScheme="primary"
              maxWidth="max-content"
              alignSelf="center"
            >
              Send {isSubmitting && <Spinner />}
            </Button>
          </form>
        </Card>
      </Container>
    </Flex>
  );
};

export default Contact;
