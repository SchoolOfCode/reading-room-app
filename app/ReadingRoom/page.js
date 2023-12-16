"use client";

// import { createBrowserClient } from "@supabase/ssr";
import ReadThoughtsButton from "./components/ReadThoughtsButton";
import Link from "next/link";
import StopWatch from "../components/Stopwatch.js";
import { VStack, Button, Center } from "@chakra-ui/react";
// import { useEffect } from "react";

export default function ReadingRoom() {
  return (
    <>
      <VStack spacing={4}>
        <h1>Welcome to the Reading Room</h1>
        <ReadThoughtsButton />
        <StopWatch></StopWatch>
        <Button colorScheme={"blackAlpha"}>
          <Link className="returnButton" href="/Avatar">
            Go to your Avatar
          </Link>
        </Button>
        <button>
          <Link className="returnButton" href="/">
            Return Home
          </Link>
        </button>
      </VStack>
    </>
  );
}
