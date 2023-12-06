// Global layout in common with all pages

import { Providers } from './providers';
import './globals.css';
// Importing fonts object and passing it down as a prop
import { fonts } from './fonts.js';

export const metadata = {
  title: 'The Reading Room',
  description: 'Created by The Blurb',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' className={fonts.bubblegum_sans.className}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
