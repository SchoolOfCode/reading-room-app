'use client';

import { Link } from '@chakra-ui/next-js';
import { Box } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';

export default function Home() {
  return (
    <>
      <h1>The Reading Room Home Page</h1>

      <button>
        <Link color='blue.400' _hover={{ color: 'blue.500' }} href='/WelcomePage'>
          Welcome Page Link
        </Link>
      </button>
      <button>
        <Link color='blue.800' _hover={{ color: 'blue.200' }} href='/ReadingRoom'>
          Reading Room Link
        </Link>
      </button>
    </>
  );
}
