// DO NOT DELETE THIS FILE FOR THE LOVE OF GOD

'use client';

import ReadThoughtsButton from './components/ReadThoughtsButton.js';
import Link from 'next/link';
import StopWatch from './components/Stopwatch.js';
import { VStack, Heading, Container } from '@chakra-ui/react';
import { fonts } from '../../fonts.js';
import styles from './ReadingRoom.module.css';
import Backdrop from '../Avatar/components/Backdrop.js';

export default function ReadingRoom() {
  return (
    <div className={styles.Reading_Room_page}>
      {/* Added 'pt' so that the body doesn't hide behind topbar */}
      <VStack as="main" spacing={10} bg="#FFD6A5" minHeight="100vh" pt="80px">
        <Heading m={5} className={fonts.arvo.className} textAlign="center">
          Welcome to the Reading Room
        </Heading>
        <StopWatch></StopWatch>
        <ReadThoughtsButton />
        <Backdrop />
      </VStack>
    </div>
  );
}
