import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>The Reading Room Home Page</h1>
      <button>
        <Link className="welcomePageLink" href="/WelcomePage">
          Welcome Page Link
        </Link>
      </button>
      <button>
        <Link className="readingRoomLink" href="/ReadingRoom">
          Reading Room Link
        </Link>
      </button>
    </>
  );
}
