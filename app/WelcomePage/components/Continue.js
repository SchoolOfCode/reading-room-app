// Message inviting the user to continue their reading

"use client";

import { Button, Text } from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";

export default function Continue() {
  return (
    <>
      <Text mb={"-45px"}>Grab your Favourite book</Text>
      <Link href="/ReadingRoom">
        <Button colorScheme={"blackAlpha"}>Go to the Reading Room</Button>
      </Link>
    </>
  );
}
