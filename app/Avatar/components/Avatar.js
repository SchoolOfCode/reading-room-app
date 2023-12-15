// Image of the avatar chosen by logged in user

'use client';

import { Image, VStack } from '@chakra-ui/react';

export default function Avatar() {
  return (
    <VStack spacing={4}>
      <Image
        src='Miffy.png'
        alt='MiffyAvatar'
        height={'8rem'}
        zIndex={'1'}
        position={'fixed'}
        bottom={'6rem'}
        left={'5rem'}
      ></Image>
    </VStack>
  );
}
