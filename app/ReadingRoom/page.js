'use client';

import Link from 'next/link';
import ReadThoughtsButton from './components/ReadThoughtsButton';

export default function ReadingRoom() {
  return (
    <>
      <h1>Welcome to the Reading Room</h1>
      <ReadThoughtsButton />
      <button>
        <Link className="returnButton" href="/">
          Return Home
        </Link>
      </button>
    </>
  );
}
