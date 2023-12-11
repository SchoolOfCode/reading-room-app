// Box showing welcoome message to the logged in user

"use client";

import { Box, Center } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { fetchUserByNickname } from "../../FetchRequests/userByNicknameFetch.js";
import { Spinner } from "@chakra-ui/react";

//
export default function Welcome() {
  // declaring username state
  const [username, setUsername] = useState(null);
  // using useEffect to make the fetch request
  useEffect(() => {
    let sessionUsername = fetchUserByNickname("Chad");
    setUsername(sessionUsername);
  }, []);

  if (username === null) {
    // Return a spinner or a default loading state while avatar is being fetched
    return <Spinner />;
  }
  return (
    <Box
      as="section"
      bg={"#00b64c"}
      borderRadius={"lg"}
      w={"75%"}
      marginTop={"5rem"}
      boxShadow={"dark-lg"}
    >
      <Center as="h3">Welcome back {username}!</Center>
    </Box>
  );
}

// declare state for username & reading note
// Use useEffect to call the Fetch request, and update the state with the result of that fetch request
