// Global layout in common with all pages

import '../globals.css';
// Importing fonts object and passing it down as a prop
import { fonts } from '../fonts.js';
import Navbar from '../components/Navbar';
import Topbar from '../components/Topbar';

export const metadata = {
  title: 'The Reading Room',
  description: 'Created by The Blurb',
};

export default function AfterLoginLayout({ children }) {
  return (
    <>
      <Topbar />
      <main className={`${fonts.arvo.className} ${fonts.lato.className}`}>{children}</main>
      <Navbar />
    </>
  );
}
