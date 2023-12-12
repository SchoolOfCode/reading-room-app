import Link from "next/link";
import StopWatch from "../components/Stopwatch.js";
import { VStack, Button } from "@chakra-ui/react";

export default function ReadingRoom() {
  return (
    <>
      <VStack spacing={4}>
        <h1>Welcome to the Reading Room</h1>
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
