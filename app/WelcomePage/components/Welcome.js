// Box showing welcoome message to the logged in user

"use client";

import { Box, Center, Heading } from "@chakra-ui/react";
import { fonts } from "../../fonts.js";

export default function Welcome() {
  return (
    <Heading as="h1" size="xl" className={fonts.architects_daughter.className}>
      Welcome back USERNAME!
    </Heading>
  );
}
