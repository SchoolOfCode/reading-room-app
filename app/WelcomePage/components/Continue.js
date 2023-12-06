// Message inviting the user to continue their reading

'use client';

import { Box, Text, Center, Icon } from '@chakra-ui/react';
import { FaBookOpen } from 'react-icons/fa';

export default function Continue() {
  return (
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
  );
}
