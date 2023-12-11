'use client';

import Link from 'next/link';
import BookForm from './components/readingRoomSubmitForm';

export default function ReadingRoom() {
  return (
    <>
      <h1>Welcome to the Reading Room</h1>
      <BookForm />
      <button>
        <Link className="returnButton" href="/">
          Return Home
        </Link>
      </button>
    </>
  );
}
