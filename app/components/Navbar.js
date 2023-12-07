'use client';

import { Container, Flex, Icon } from '@chakra-ui/react';
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
    <Container bg={'red'} position={'fixed'} bottom={'0'} width={'100%'}>
      <Flex justify={'space-around'} align={'center'}>
        <Link href='/WelcomePage'>
          <Icon
            as={BiSolidHomeHeart}
            boxSize={'100'}
            onClick={() => handleSetActivePage('WP')}
            style={activePage === 'WP' ? { color: 'green' } : { color: 'white' }}
          />
        </Link>
        <Link href='/ReadingRoom'>
          <Icon
            as={FaBookOpen}
            boxSize={'97'}
            onClick={() => handleSetActivePage('RR')}
            style={activePage === 'RR' ? { color: 'green' } : { color: 'white' }}
          />
        </Link>
        <Link href='#'>
          <Icon
            as={FaSmile}
            boxSize={'90'}
            onClick={() => handleSetActivePage('A')}
            style={activePage === 'A' ? { color: 'green' } : { color: 'white' }}
          />
        </Link>
      </Flex>
    </Container>
  );
}
