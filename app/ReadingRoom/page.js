'use client';

import Link from 'next/link';
import ReadThoughtsButton from './components/ReadThoughtsButton';
import { Center } from '@chakra-ui/react';

export default function ReadingRoom() {
  return (
    <Center minH="80vh" display="flex" flexDirection="column" justifyContent="space-around">
      <h1>Welcome to the Reading Room</h1>
      <ReadThoughtsButton />
      <button>
        <Link className="returnButton" href="/">
          Return Home
        </Link>
      </button>
    </Center>
  );
}
