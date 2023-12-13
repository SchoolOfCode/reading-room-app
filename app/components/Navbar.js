'use client';

import { Container, Flex, Icon, Box } from '@chakra-ui/react';
import { Link } from '@chakra-ui/next-js';
// import { FaBookOpen,FaPaw, FaHome } from 'react-icons/fa';
// import { FaBookOpen } from 'react-icons/fa6';

// Ideas for icons
import { HiBuildingStorefront } from 'react-icons/hi2';
import { GiPawPrint } from 'react-icons/gi';
import { GiSpellBook } from 'react-icons/gi';
import { useState } from 'react';

export default function Navbar() {
  const [activePage, setActivePage] = useState('');

  // Function to update the activePage state
  const handleSetActivePage = (page) => {
    setActivePage(page);
  };

  return (
    <Container bg="#DDD9D1" position="fixed" bottom="0" width="100%" height="75px" pt="5px">
      <Flex justify="space-around" align="center">
        <Link href="/WelcomePage" height="75px">
          <Icon
            as={HiBuildingStorefront}
            color="#747474"
            boxSize={50} // Adjust icons height here
            onClick={() => handleSetActivePage('WP')}
          />
          <Box
            bg="#CAFFBF"
            border="1px solid #747474" // Added border due to light colours blending to the background
            height="5px"
            display={activePage === 'WP' ? 'block' : 'none'}
          />
        </Link>
        <Link href="/ReadingRoom" height="75px">
          <Icon
            as={GiSpellBook}
            color="#747474"
            width="50px"
            boxSize={50} // Adjust icons height here
            onClick={() => handleSetActivePage('RR')}
          />
          <Box
            bg="#FFD6A5"
            border="1px solid #747474"
            height="5px"
            mt="2px"
            display={activePage === 'RR' ? 'block' : 'none'}
          />
        </Link>

        <Link href='/Avatar' height="75px">
          <Icon
            as={GiPawPrint}
            color="#747474"
            boxSize={50} // Adjust icons height here
            onClick={() => handleSetActivePage('A')}
          />
          <Box
            bg="#FDFFAB"
            border="1px solid #747474"
            height="5px"
            mt="2px"
            display={activePage === 'A' ? 'block' : 'none'}
          />
        </Link>
      </Flex>
    </Container>
  );
}
