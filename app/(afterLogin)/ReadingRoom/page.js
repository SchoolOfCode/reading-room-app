// DO NOT DELETE THIS FILE FOR THE LOVE OF GOD

'use client';

import ReadThoughtsButton from './components/ReadThoughtsButton.js';
import Link from 'next/link';
import StopWatch from './components/Stopwatch.js';
import { VStack, Heading, Container } from '@chakra-ui/react';
import { fonts } from '../../fonts.js';
import styles from './ReadingRoom.module.css';

export default function ReadingRoom() {
  return (
    <div className={styles.Reading_Room_page}>
      {/* <Container bg="#FFD6A5" minW="100%" align="right" p={5}> */}
      {/* <Button>
          <Link className='returnButton' href='/'>
            Log out
          </Link>
        </Button> */}
      {/* </Container> */}
      <VStack as="main" spacing={10} bg="#FFD6A5" minHeight="100vh" pt="80px">
        <Heading m={5} className={fonts.arvo.className} textAlign="center">
          Welcome to the Reading Room
        </Heading>
        <StopWatch></StopWatch>
        <ReadThoughtsButton />
      </VStack>
    </div>
  );
}
