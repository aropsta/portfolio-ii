"use client";
import React from "react";
import { Text, Box, Heading, Flex, Container, Wrap } from "@chakra-ui/react";

const Contact = () => {
  function handleSubmit() {}
  return (
    <Flex
      className="w-[100%] h-full py-28"
      backgroundColor="gray.50"
      flexDirection="column"
    >
      <Container maxWidth="container.lg" className="flex gap-16 flex-col">
        <form className="form" onSubmit={handleSubmit}>
          {/* {validForm && submitted ? <p className="sent">Sent successfully!</p> : <></>} */}{" "}
          <h2 aria-label="Contact me">Contact me</h2>{" "}
          <p className="required">
            Required fields are followed by <abbr title="required">*</abbr>{" "}
          </p>
          <button type="submit">Send</button>
        </form>
      </Container>
    </Flex>
  );
};

export default Contact;
