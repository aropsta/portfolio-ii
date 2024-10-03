"use client";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";
const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Textarea,
  Heading,
  Flex,
  Container,
  FormControl,
  FormLabel,
  Input,
  Card,
  Button,
  FormErrorMessage,
  Spinner,
} from "@chakra-ui/react";

import { useForm } from "react-hook-form";

interface FormInputs {
  name: string;
  email: string;
  phone: number;
  company: string;
  message: string;
}

const Contact = () => {
  //TODO: handle submit and form validation
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<FormInputs>();

  const [submitError, setSubmitError] = useState<string | null>(null);
  // initialize emailjs
  emailjs.init(EMAILJS_PUBLIC_KEY);

  const onSubmit = async (data: FormInputs) => {
    const formData = {
      name: data.name,
      email: data.email,
      company: data.company,
      phone: data.phone,
      message: data.message,
    };

    console.log("onSubmit()", formData);

    try {
      setSubmitError(null); // Clear any previous errors
      const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formData,
      );

      if (response.status === 200) {
        reset();
      }
    } catch (error) {
      console.error("EmailJS Error:", error);
      setSubmitError("Failed to send message. Please try again later.");
    }
  };

  //Emailjs network error if onSubmit is not await'd
  const handleFormSubmit = handleSubmit(async (data) => {
    await onSubmit(data);
  });

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
          {isSubmitSuccessful && !submitError && (
            <Alert status="success">
              <AlertIcon />
              <AlertTitle>Message sent!</AlertTitle>
              <AlertDescription>
                Thank you for your message. I&apos;ll get back to you soon.
              </AlertDescription>
            </Alert>
          )}

          {submitError && (
            <Alert status="error">
              <AlertIcon />
              <AlertTitle>Failed to send message</AlertTitle>
              <AlertDescription>
                Please try again later or contact me through other means.
              </AlertDescription>
            </Alert>
          )}
          <form onSubmit={handleFormSubmit} className="flex gap-2 flex-col">
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
