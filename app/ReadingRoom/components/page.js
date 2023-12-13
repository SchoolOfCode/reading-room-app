"use client";

import BookForm from "./readingRoomSubmitForm";
import Link from "next/link";
import StopWatch from "../../components/Stopwatch.js";
import { VStack, Button, Heading } from "@chakra-ui/react";

export default function ReadingRoom() {
  return (
    <VStack as="main" spacing={10} bg="#FFD6A5">
      <Heading mt={50}>Welcome to the Reading Room</Heading>
      <BookForm />
      <StopWatch></StopWatch>
      <Button mb={100}>
        <Link className="returnButton" href="/">
          Return Home
        </Link>
      </Button>
    </VStack>
  );
}
