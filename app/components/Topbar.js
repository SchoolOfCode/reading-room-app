'use client';

import { Avatar, AvatarBadge, Box, Container, Flex, Image, VStack } from '@chakra-ui/react';
import Link from 'next/link';

import { GiExitDoor } from 'react-icons/gi';

export default function Topbar() {
  return (
    // Topbar sopra welcome
    <Container bg="" position="fixed" top="0" minWidth="100%" minHeight="10%">
      <Flex justifyContent="space-between" alignItems="center">
        <VStack spacing={2}>
          <Box>
            <Image src="RaadingRoomLogo.png" alt="Logo" boxSize="90px" />
          </Box>
        </VStack>
        <Box>
          <Avatar src="Miffy.png" border="3px solid #747474" boxSize="65px" bg="white">
            <Link href="/">
              <AvatarBadge as={GiExitDoor} boxSize="40px" bg="#747474" color="red"></AvatarBadge>
            </Link>
          </Avatar>
        </Box>
      </Flex>
    </Container>
  );
}
