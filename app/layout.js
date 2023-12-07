// Global layout in common with all pages

import { Providers } from './providers';
import './globals.css';
// Importing fonts object and passing it down as a prop
import { fonts } from './fonts.js';
import Navbar from './components/Navbar';

export const metadata = {
  title: 'The Reading Room',
  description: 'Created by The Blurb',
};


export default function RootLayout({ children }) {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <html lang='en' className={fonts.bubblegum_sans.className}>
      <body>
        <Providers>{children}</Providers>
        <Navbar isClicked={isClicked} />
      </body>
    </html>
  );
}
