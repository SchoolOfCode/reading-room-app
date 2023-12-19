"use client";
import React from "react";
import { SubmitButton } from "./SubmitButton";

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
              type="email"
              border="none"
              borderBottom="2px solid #747474"
              borderRadius={5}
              _focus={{
                bg: "blue.50",
                borderBottomColor: "#747474",
              }}
            />
          </InputGroup>
        </FormControl>
        <FormControl width="90%">
          <FormLabel fontSize={18} fontWeight="bold">
            Author
          </FormLabel>
          <InputGroup>
            <InputLeftElement pointerEvents="none">🖋️</InputLeftElement>
            <Input
              placeholder="Author of the book you're exploring"
              rounded="none"
              variant="filled"
              type="email"
              border="none"
              borderBottom="2px solid #747474"
              borderRadius={5}
              _focus={{
                bg: "blue.50",
                borderBottomColor: "#747474",
              }}
            />
          </InputGroup>
        </FormControl>
        <FormControl width="90%">
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
        </FormControl>
        ;
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
          <SubmitButton />
        </Container>
      </VStack>
    </>
  );
};

// ("use client");

// import { Center, VStack } from "@chakra-ui/react";
// import { useState, useEffect } from "react";
// import { getCurrentUser } from "./getCurrentUser.js";
// // Define component for the submit form
// const BookForm = ({ onClose }) => {
//   // State variables to store the form input values
//   const [title, setTitle] = useState("");
//   const [author, setAuthor] = useState("");
//   const [notes, setNotes] = useState("");
//   const [users_id, setUsers_id] = useState("");

//   const setUser = async () => {
//     const user = await getCurrentUser();
//     setUsers_id(user.id);
//     console.log(`users_id currently set as: ${user}`);
//     console.log(`this is the id: ${user.id}`);
//   };

//   useEffect(() => {
//     setUser();
//   }, []);

//   useEffect(() => {
//     console.log(users_id);
//   }, [users_id]);

//   // State variable to track which input is selected
//   const [selectedInput, setSelectedInput] = useState(null);
//   // Success message once the user submits the form
//   const [submissionMessage, setSubmissionMessage] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault(); // This line prevents the default form submission behavior

//     // Error handling
//     try {
//       // Send a POST request to the 'api/reading_notes' endpoint - see notes
//       const response = await fetch("api/reading_notes", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         // Convert form data to JSON and include it in the request body
//         body: JSON.stringify({ title, author, notes, users_id }),
//       });

//       // If request successful, parse the response JSON and log the result
//       if (response.ok) {
//         const result = await response.json();
//         console.log(result);
//         setSubmissionMessage("You are a champ! Keep up the good work.");
//       } else {
//         console.error(
//           "Failed to add note. Try later, please. Error originated in BookForm.js, line 57 triggered"
//         );
//       }

//       onClose();
//     } catch (error) {
//       console.error(
//         "Error adding note: Error originated in BookForm.js, line 62 triggered",
//         error
//       );
//     }
//   };

//   // Clear form after submission and redirect to Welcome Page
//   useEffect(() => {
//     let timeoutId = null;

//     if (submissionMessage) {
//       timeoutId = setTimeout(() => {
//         window.location.href =
//           "https://reading-room-app.vercel.app/WelcomePage";
//       }, 3000);
//     }

//     return () => clearTimeout(timeoutId);
//   }, [submissionMessage]);

//   return (
//     <Center
//       align="stretch"
//       p={4}
//       borderRadius="md"
//       boxShadow="md"
//       bgColor="#00a4b4"
//     >
//       <h1>Add a New Note</h1>
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="title">Title:</label>
//         <input
//           type="text"
//           id="title"
//           name="title"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//           onFocus={() => setSelectedInput("title")}
//           style={{
//             color: "black",
//             border:
//               selectedInput === "title" ? "2px solid violet" : "1px solid gray",
//           }}
//           required
//         />
//         <br />

//         <label htmlFor="author">Author:</label>
//         <input
//           type="text"
//           id="author"
//           name="author"
//           value={author}
//           onChange={(e) => setAuthor(e.target.value)}
//           onFocus={() => setSelectedInput("author")}
//           style={{
//             color: "black",
//             border:
//               selectedInput === "author"
//                 ? "2px solid violet"
//                 : "1px solid gray",
//           }}
//           required
//         />
//         <br />

//         <label htmlFor="notes">Notes:</label>
//         <textarea
//           id="notes"
//           name="notes"
//           value={notes}
//           onChange={(e) => setNotes(e.target.value)}
//           onFocus={() => setSelectedInput("notes")}
//           style={{
//             color: "black",
//             border:
//               selectedInput === "notes" ? "2px solid violet" : "1px solid gray",
//           }}
//           rows="4"
//           required
//         ></textarea>
//         <br />

//         {submissionMessage && (
//           <p style={{ color: "green" }}>{submissionMessage}</p>
//         )}

//         <input type="submit" value="Submit" style={{ color: "black" }} />
//       </form>
//     </Center>
//   );
// };

// export default BookForm;

export default BookForm;
