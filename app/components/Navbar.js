'use client';

import { Container, Flex, Icon, Box } from '@chakra-ui/react';
import { Link } from '@chakra-ui/next-js';
import { FaBookOpen, FaSmile } from 'react-icons/fa';
import { BiSolidHomeHeart } from 'react-icons/bi';
import { useState } from 'react';


export default function Navbar() {
  const [activePage, setActivePage] = useState('');

  // Function to update the activePage state
  const handleSetActivePage = (page) => {
    setActivePage(page);
  };

  return (
    <Container bg={'#F3E5AB'} position={'fixed'} bottom={'0'} width={'100%'}>
      <Flex justify={'space-around'} align={'center'}>
        <Link href='/WelcomePage'>
          <Icon
            as={BiSolidHomeHeart}
            color='#00B64C'
            boxSize={'100'}
            onClick={() => handleSetActivePage('WP')}
          />
          <Box
            bg='#00B64C'
            height='5px'
            width='100%'
            mt='2px'
            mb='10px'
            borderRadius={'lg'}
            display={activePage === 'WP' ? 'block' : 'none'}
          />
        </Link>
        <Link href='/ReadingRoom'>
          <Icon
            as={FaBookOpen}
            color='#F34213'
            boxSize={'97'}
            onClick={() => handleSetActivePage('RR')}
          />
          <Box
            bg='#F34213'
            height='2px'
            width='100%'
            mt='2px'
            display={activePage === 'RR' ? 'block' : 'none'}
          />
        </Link>
        <Link href='#'>
          <Icon
            as={FaSmile}
            color='#E83F6F'
            boxSize={'90'}
            onClick={() => handleSetActivePage('A')}
          />
          <Box
            bg='#E83F6F'
            height='2px'
            width='100%'
            mt='2px'
            display={activePage === 'A' ? 'block' : 'none'}
          />
        </Link>
      </Flex>
    </Container>
  );
}
