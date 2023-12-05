import Link from "next/link";

export default function WelcomePage() {
  return (
    <>
      <h1>Welcome to the welcome page</h1>
      <button>
        <Link className="returnButton" href="/">
          Return Home
        </Link>
      </button>
    </>
  );
}
