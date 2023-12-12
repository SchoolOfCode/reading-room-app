// Importing Bubblegum Sans from next/font and exporting the fonts object

import { Architects_Daughter, Abel } from 'next/font/google'; //

const architects_daughter = Architects_Daughter({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-architects_daughter',
});

const abel = Abel({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-abel',
});


export const fonts = {
  architects_daughter,
  abel
};
