// Global layout in common with all pages

import { Providers } from "./providers";
import "./globals.css";
// Importing fonts object and passing it down as a prop
import { fonts } from "./fonts.js";
import Navbar from "./components/Navbar";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  title: "The Reading Room",
  description: "Created by The Blurb",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${fonts.arvo.className} ${fonts.lato.className}`}
    >
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
