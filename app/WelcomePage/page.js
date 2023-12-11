// Welcome Page tailored for logged in user

"use client";

import { VStack } from "@chakra-ui/react";
import Welcome from "./components/Welcome.js";
import Avatar from "./components/Avatar.js";
import ReadingNotes from "./components/ReadingNotes.js";
import Continue from "./components/Continue.js";

export default function WelcomePage() {
  return (
    <VStack as="main" spacing={12}>
      <Welcome />
      <Avatar />
      <ReadingNotes />
      <Continue />
    </VStack>
  );
}

// make fetch request here, pass the data down as props to the relevant components
// render the reactive information in the components
// have the url take in the input based of a user prompt
// insert Chakra loading wheel here, and return that if something is null.
// Reading room will not need any GET gunctionality, only POST, so will work nicely
