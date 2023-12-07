'use client';

import { Container, Flex, Icon, SimpleGrid } from '@chakra-ui/react';
import { Link } from '@chakra-ui/next-js';
import { FaBookOpen, FaSmile } from 'react-icons/fa';
import { BiSolidHomeHeart } from 'react-icons/bi';

export default function Navbar() {
  return (
    <Container bg={'red'} position={'fixed'} bottom={'0'} width={'100%'} >
      <Flex justify={'space-around'} align={'center'}>
        <Link href='/WelcomePage'>
          <Icon as={BiSolidHomeHeart} boxSize={'100'} />
        </Link>
        <Link href='/ReadingRoom'>
          <Icon as={FaBookOpen} boxSize={'97'} />
        </Link>
        <Link href='#'>
          <Icon as={FaSmile} boxSize={'90'} />
        </Link>
      </Flex>
    </Container>
  );
}