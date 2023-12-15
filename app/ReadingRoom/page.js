"use client";

import { createBrowserClient } from "@supabase/ssr";
import ReadThoughtsButton from "./components/ReadThoughtsButton";
import Link from "next/link";
import StopWatch from "../components/Stopwatch.js";
import { VStack, Button, Center } from "@chakra-ui/react";
import { useEffect } from "react";

export default function ReadingRoom() {
  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  );
  // const user = await supabase.auth.getUser()...
  useEffect(() => {
    async function getUserId() {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      console.log(user);
      return user;
    }
    const data = getUserId();
    return data;
  }, []);
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
