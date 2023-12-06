// Importing Bubblegum Sans from next/font and exporting the fonts object

import { Bubblegum_Sans } from 'next/font/google'; //

const bubblegum_sans = Bubblegum_Sans({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-bubblegum',
});

export const fonts = {
  bubblegum_sans,
};
