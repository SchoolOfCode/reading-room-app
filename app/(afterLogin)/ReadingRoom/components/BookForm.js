// "use client";
import React, { useState, useEffect } from "react";
import { SubmitButton } from "./SubmitButton";
import { getCurrentUser } from "./getCurrentUser.js";
import {
  Container,
  VStack,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
  useBreakpointValue,
  Textarea,
  HStack,
  Text,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";

import { fonts } from "@/app/fonts";

export const BookForm = () => {
  // Variable to guarantee responsiveness on different screen size
  const isMobile = useBreakpointValue({ base: true, md: false });
  // State variables to store the form input values
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [notes, setNotes] = useState("");
  const [users_id, setUsers_id] = useState("");
  // State variable to track whether the form is submitted
  const [isSubmitting, setIsSubmitting] = useState(false);

  // getting the current user's ID and saving it to users_id
  const setUser = async () => {
    try {
      const user = await getCurrentUser();
      setUsers_id(user.id);
      console.log(`users_id currently set as: ${user}`);
      console.log(`this is the id: ${user.id}`);
    } catch (error) {
      console.error("Error fetching current user:", error);
    }
  };

  useEffect(() => {
    setUser();
  }, []);

  useEffect(() => {
    console.log(users_id);
  }, [users_id]);

  // useEffect to handle the POST request when the form is submitted
  useEffect(() => {
    const submitForm = async () => {
      try {
        // Send a POST request to the 'api/reading_notes' endpoint
        const response = await fetch("api/reading_notes", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          // Convert form data to JSON and include it in the request body
          body: JSON.stringify({ title, author, notes, users_id }),
        });

        // If the request is successful, parse the response JSON and log the result
        if (response.ok) {
          const result = await response.json();
          console.log(result);
        } else {
          console.error(
            "Failed to add note. Try later, please. Error originated in BookForm.js, line 74 triggered"
          );
        }
      } catch (error) {
        console.error(
          "Error adding note: Error originated in BookForm.js, line 69 triggered",
          error
        );
      } finally {
        // Reset the form submission state
        setIsSubmitting(false);
      }
    };

    // If the form is submitted, trigger the submitForm function
    if (isSubmitting) {
      submitForm();
    }
  }, [isSubmitting]);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Set the form submission state to true
    setIsSubmitting(true);
  };

  return (
    <>
      <VStack
        spacing={4}
        align="center"
        w="full"
        h="100%"
        mt={isMobile ? 0 : 10}
        mb={isMobile ? 0 : 10}
      >
        <VStack spacing={1} align="center" w="100%">
          <Heading
            as="h1"
            size="xl"
            align="center"
            width="95%"
            className={fonts.arvo.className}
            fontSize={35}
            mt="20px"
          >
            Fill out your thoughts 🎉
          </Heading>
        </VStack>
        <FormControl width="90%">
          <FormLabel fontSize={18} fontWeight="bold">
            Title
          </FormLabel>
          <InputGroup>
            <InputLeftElement pointerEvents="none">🐉</InputLeftElement>
            <Input
              placeholder="Title of the book you're exploring"
              rounded="none"
              variant="filled"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              border="none"
              borderBottom="2px solid #747474"
              borderRadius={5}
              _focus={{
                bg: "blue.50",
                borderBottomColor: "#747474",
              }}
            />
          </InputGroup>

          <FormLabel fontSize={18} fontWeight="bold">
            Author
          </FormLabel>
          <InputGroup>
            <InputLeftElement pointerEvents="none">🖋️</InputLeftElement>
            <Input
              placeholder="Author of the book you're exploring"
              rounded="none"
              variant="filled"
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              border="none"
              borderBottom="2px solid #747474"
              borderRadius={5}
              _focus={{
                bg: "blue.50",
                borderBottomColor: "#747474",
              }}
            />
          </InputGroup>

          <FormLabel fontSize={18} fontWeight="bold">
            Reading Notes
          </FormLabel>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              color="gray.500"
              fontSize="1.2em"
              position="absolute"
              zIndex="1"
              ml="0.1em"
              mt="0.2em"
            >
              📝
            </InputLeftElement>
            <Textarea
              placeholder="Share your favorite moments and thoughts from today's adventure!"
              rounded="none"
              variant="filled"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              type="text"
              border="none"
              borderBottom="2px solid #747474"
              borderRadius={5}
              pl="2.5em"
              _focus={{
                bg: "blue.50",
                borderBottomColor: "#747474",
              }}
            />
          </InputGroup>

          <HStack spacing={4} mt={4} ml={4} mr={4}>
            <Text fontWeight="bold" fontSize={18}>
              Did you enjoy the reading session?
            </Text>
            <Button colorScheme="green">👍</Button>
            <Button colorScheme="red">👎</Button>
          </HStack>

          <Container
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            width="100%"
          >
            <SubmitButton onSubmit={handleSubmit} />
          </Container>
        </FormControl>
      </VStack>
    </>
  );
};

export default BookForm;
