// template for what the pages look like

import { Inter } from 'next/font/google';
import { Providers } from './providers';
import { fonts } from './fonts.js'
import './globals.css';

// 
const inter = Inter({ subsets: ['latin'] });

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
