
'use client';


import BookForm from './components/readingRoomSubmitForm';

import Link from "next/link";
import Home from "../components/Stopwatch.js"


export default function ReadingRoom() {
  return (
    <>
      <h1>Welcome to the Reading Room</h1>

      <BookForm />

      <Home></Home>

      <button>
        <Link className="returnButton" href="/">
          Return Home
        </Link>
      </button>
    </>
  );
}
