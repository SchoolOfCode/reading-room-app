// Global layout in common with all pages

import { Providers } from "./providers";
import "./globals.css";
// Importing fonts object and passing it down as a prop
import { fonts } from "./fonts.js";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "The Reading Room",
  description: "Created by The Blurb",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${fonts.architects_daughter.className} ${fonts.abel.className}`}
    >
      {/*how to use bith heading and body as attribute  */}
      <body>
        <Providers>{children}</Providers>
        <Navbar />
      </body>
    </html>
  );
}
