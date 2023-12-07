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
    <Container bg={'#f3e5ab'} position={'fixed'} bottom={'0'} width={'100%'} zIndex={'base'}>
      <Flex justify={'space-around'} align={'center'}>
        <Link href='/WelcomePage'>
          <Icon
            as={BiSolidHomeHeart}
            color={'#00b64c'}
            boxSize={'100'}
            onClick={() => handleSetActivePage('WP')}
          />
          <Box
            as='section'
            w={'10%'}
            style={activePage === 'WP' ? { bg: '#00b64c' } : { bg: 'gray' }}
          >
            xxx
          </Box>
        </Link>

        <Link href='/ReadingRoom'>
          <Icon
            as={FaBookOpen}
            color={'#F34213'}
            boxSize={'97'}
            onClick={() => handleSetActivePage('RR')}
          />
          <Box
            as='section'
            w={'10%'}
            style={activePage === 'RR' ? { bg: '#F34213' } : { bg: 'gray' }}
          >
            xxx
          </Box>
        </Link>
        <Link href='#'>
          <Icon
            as={FaSmile}
            color={'#E83F6F'}
            boxSize={'90'}
            onClick={() => handleSetActivePage('A')}
          />
          <Box
            as='section'
            w={'10%'}
            style={activePage === 'A' ? { bg: '#E83F6F' } : { bg: 'gray' }}
          >
            xxx
          </Box>
        </Link>
      </Flex>
    </Container>
  );
}
