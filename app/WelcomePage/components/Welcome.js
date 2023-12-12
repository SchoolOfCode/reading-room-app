// Box showing welcoome message to the logged in user
"use client";


import { Box, Center, Heading } from "@chakra-ui/react";
import { fonts } from "../../fonts.js";


export default function Welcome({ nickname }) {

  return (

    <Heading as="h1" size="xl" className={fonts.architects_daughter.className}>
      Welcome back {nickname}!
    </Heading>
  );
}

// declare state for username & reading note
// Use useEffect to call the Fetch request, and update the state with the result of that fetch request
