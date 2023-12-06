import { Rubik } from "next/font/google";
import { Bubblegum_Sans } from "next/font/google"; //

const rubik = Rubik({
  subsets: ["latin"],
  variable: "--font-rubik",
});

const bubblegum_sans = Bubblegum_Sans({
  subsets: ["latin"],
  weight: '400',
  variable: "--font-bubblegum",
});

export const fonts = {
  bubblegum_sans,
};
