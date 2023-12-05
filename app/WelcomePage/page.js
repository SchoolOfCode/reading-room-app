'use client';

import { Link } from '@chakra-ui/next-js';
import { Box } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';
import { Center, Square, Circle } from '@chakra-ui/react';
import { Image } from '@chakra-ui/react';

export default function WelcomePage() {
  return (
    <>
      <h1>Welcome to the welcome page</h1>
      <Box as='section' bg={'#D9D9D6'} borderRadius={'lg'} w={'75%'} m={'auto'} p={'auto'}>
        <Center>Welcome back USERNAME!</Center>
      </Box>
      <Center>
        <Image src='https://bit.ly/dan-abramov' alt='Dan Abramov'></Image>
      </Center>
      <Box as='section' bg={'#D9D9D6'} borderRadius={'lg'} w={'75%'} m={'auto'} p={'auto'}>
        <Center>READING NOTES</Center>
      </Box>
      <Box as='section' bg={'#D9D9D6'} borderRadius={'lg'} w={'75%'} m={'auto'} p={'auto'}>
        <Center>GO BACK TO READ!</Center>
      </Box>
      <button>
        <Link className='returnButton' href='/'>
          Return Home
        </Link>
      </button>
    </>
  );
}
