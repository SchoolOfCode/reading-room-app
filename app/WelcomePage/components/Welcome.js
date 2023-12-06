// Box showing welcoome message to the logged in user

'use client';

import { Box, Center } from '@chakra-ui/react';

export default function Welcome() {
  return (
    <Box
      as='section'
      bg={'#00b64c'}
      borderRadius={'lg'}
      w={'75%'}
      marginTop={'5rem'}
      boxShadow={'dark-lg'}
    >
      <Center as='h3'>Welcome back USERNAME!</Center>
    </Box>
  );
}
