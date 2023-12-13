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
    <Container bg="#DDD9D1" position="fixed" bottom="0" width="100%" height="75px">
      <Flex justify="space-around" align="center">
        <Link href="/WelcomePage">
          <Icon
            as={BiSolidHomeHeart}
            color="#747474"
            boxSize={50} // Adjust icons height here
            onClick={() => handleSetActivePage('WP')}
          />
          <Box
            bg="#CAFFBF"
            height="5px"
            width="100%"
            mt="2px"
            borderRadius="lg"
            display={activePage === 'WP' ? 'block' : 'none'}
          />
        </Link>
        <Link href="/ReadingRoom">
          <Icon
            as={FaBookOpen}
            color="#747474"
            boxSize={50} // Adjust icons height here
            onClick={() => handleSetActivePage('RR')}
          />
          <Box
            bg="#FFD6A5"
            height="5px"
            width="100%"
            mt="2px"
            display={activePage === 'RR' ? 'block' : 'none'}
          />
        </Link>
        <Link href="#">
          <Icon
            as={FaSmile}
            color="#747474"
            boxSize={50} // Adjust icons height here
            onClick={() => handleSetActivePage('A')}
          />
          <Box
            bg="#FDFFAB"
            height="2px"
            width="100%"
            mt="2px"
            display={activePage === 'A' ? 'block' : 'none'}
          />
        </Link>
      </Flex>
    </Container>
  );
}
