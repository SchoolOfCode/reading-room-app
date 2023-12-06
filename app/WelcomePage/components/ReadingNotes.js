// Box showing latest reading notes from logged in user

'use client';

import { Box, Text } from '@chakra-ui/react';

export default function ReadingNotes() {
  return (
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
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </Text>
    </Box>
  );
}
