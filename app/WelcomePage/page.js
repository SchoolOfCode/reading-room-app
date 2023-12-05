'use client';

import { Link } from '@chakra-ui/next-js';
import { Box, VStack, Text, Center, Image, Icon } from '@chakra-ui/react';
import { FaBookOpen } from 'react-icons/fa';

export default function WelcomePage() {
  return (
    <>
      <Center>
        <VStack spacing={'30px'}>
          <Box
            as='section'
            bg={'#00b64c'}
            borderRadius={'lg'}
            w={'75%'}
            marginTop={'5rem'}
            boxShadow={'dark-lg'}
          >
            <Center>Welcome back USERNAME!</Center>
          </Box>
          <Image
            src='https://bit.ly/dan-abramov'
            alt='Dan Abramov'
            boxSize={'150'}
            boxShadow={'dark-lg'}
          ></Image>
          <Box
            as='section'
            bg={'#00b64c'}
            borderRadius={'lg'}
            w={'75%'}
            m={'auto'}
            p={'0.5rem'}
            boxShadow={'dark-lg'}
          >
            <Text>
              READING NOTES: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </Text>
          </Box>
          <Box
            display={'flexbox'}
            textAlign={'center'}
            as='section'
            bg={'#00b64c'}
            borderRadius={'lg'}
            w={'75%'}
            m={'auto'}
            p={'auto'}
            boxShadow={'dark-lg'}
          >
            <Text>Go to the Reading Room</Text>
            <Center>
              <Icon as={FaBookOpen} boxSize={'10'}></Icon>
            </Center>
            <Text>and continue reading!</Text>
          </Box>
        </VStack>
      </Center>
      <button>
        <Link className='returnButton' href='/'>
          Return Home
        </Link>
      </button>
    </>
  );
}
