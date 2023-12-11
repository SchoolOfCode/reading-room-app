// Box showing welcoome message to the logged in user

"use client";

import { Box, Center, Heading } from "@chakra-ui/react";

export default function Welcome() {
  return (
    <Heading as="h1" size="xl">
      Welcome back USERNAME!
    </Heading>
  );
}
