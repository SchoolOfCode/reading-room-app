"use client";
import { Heading } from "@chakra-ui/react";
import { fonts } from "./fonts.js";

export default function Home() {
  return (
    <Heading as="h1" size="xl" className={fonts.architects_daughter.className}>
      The Reading Room Login Page
    </Heading>
  );
}
