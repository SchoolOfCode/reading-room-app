'use client';
import { Image, VStack } from '@chakra-ui/react';

export default function Backdrop() {
  return (
    <Image src='Backdrop.png' alt='Backdrop for Reward Room' zIndex={'0'} height={'28rem'}></Image>
  );
}
