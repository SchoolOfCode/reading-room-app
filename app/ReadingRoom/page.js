"use client";

import BookForm from "./components/BookForm.js";
import Link from "next/link";
import StopWatch from "./components/Stopwatch.js";
import { VStack, Button, Heading, Container } from "@chakra-ui/react";
import { fonts } from "../fonts.js";
import styles from './ReadingRoom.module.css';


export default function ReadingRoom() {
  return (
    <div className={styles.Reading_Room_page}>
      <Container bg="#FFD6A5" minW="100%" align="right" p={5}>
        <Button>
        
          <Link className="returnButton" href="/">
            Log out
          </Link>
        </Button>
      </Container>
      <VStack as="main" spacing={10} bg="#FFD6A5" minHeight="100vh">
        <Heading m={5} className={fonts.arvo.className}>
          Welcome to the Reading Room
        </Heading>
        <BookForm />
        <StopWatch></StopWatch>
      </VStack>
    </div>
  );
}
