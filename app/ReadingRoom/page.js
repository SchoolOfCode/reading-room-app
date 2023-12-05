import Link from "next/link";

export default function ReadingRoom() {
  return (
    <>
      <h1>Welcome to the Reading Room</h1>
      <button>
        <Link className="returnButton" href="/">
          Return Home
        </Link>
      </button>
    </>
  );
}
