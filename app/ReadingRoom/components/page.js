"use client";

import BookForm from "./readingRoomSubmitForm";
import Link from "next/link";
import StopWatch from "../../components/Stopwatch.js";
import { VStack, Button, Heading, Container } from "@chakra-ui/react";

export default function ReadingRoom() {
  return (
    <>
      <Container bg="#FFD6A5" minW="100%" align="right" p={5}>
        <Button>
          <Link className="returnButton" href="/">
            Log out
          </Link>
        </Button>
      </Container>
      <VStack as="main" spacing={10} bg="#FFD6A5" minHeight="100vh">
        <Heading mt={10}>Welcome to the Reading Room</Heading>
        <BookForm />
        <StopWatch></StopWatch>
      </VStack>
    </>
  );
}
