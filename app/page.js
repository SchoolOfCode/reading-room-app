'use client';

import {
  Container,
  Heading,
  Box,
  VStack,
  Text,
  FormControl,
  FormLabel,
  Input,
  Button,
  Divider,
  Image,
  Center,
} from '@chakra-ui/react';
import { fonts } from './fonts';
import { Link } from '@chakra-ui/next-js';

export default function Home() {
  return (
    <Container
      bg="#9BF6FF"
      height="100vh"
      width="100%"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Box w={['full', 'md']} borderRadius={10}>
        <VStack spacing={4} align="center" w="full">
          <VStack spacing={1} align="center" w="full">
            <Image
              src="RaadingRoomLogo.png"
              alt="The Reading Room Logo"
              fallbackSrc="https://ibb.co/pKDxgyG" // A little help in case the image src doesn't load
              boxSize="100px"
              objectFit="cover"
            />

            <Heading as="h1" size="xl" align="center" className={fonts.arvo.className}>
              Jolly to see you again, my friend!
            </Heading>
            <Text>Enter your email and password to keep the fun going.</Text>
            <Divider h="3px" borderColor="black"></Divider>
          </VStack>
          <FormControl>
            <FormLabel>E-mail</FormLabel>
            <Input rounded="none" variant="filled" />
          </FormControl>
          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input rounded="none" variant="filled" type="password" />
          </FormControl>
          <Link href="/WelcomePage">
            <Button
              rounded="none"
              w="full"
              color="white"
              colorScheme="blackAlpha"
              borderRadius="5px"
            >
              Login
            </Button>
          </Link>
        </VStack>
      </Box>
      <Box w={['full', 'md']}>
        <Center>
          <Image src="the blurb.png" alt="The Blurb" fallbackSrc="" objectFit="cover" />
        </Center>
      </Box>
    </Container>
  );
}
