// Importing Arvo and Lato from next/font and exporting the fonts object

import { Arvo, Lato } from 'next/font/google'; //

const arvo = Arvo({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  variable: '--font-arvo',
});

const lato = Lato({
  subsets: ['latin'],
  weight: ['100', '300', '400', '700', '900'],
  style: ['normal', 'italic'],
  variable: '--font-lato',
});

export const fonts = {
  arvo,
  lato,
};
