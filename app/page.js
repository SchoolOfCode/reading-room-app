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

// console.log(fonts);
// console.log(fonts.architects_daughter);

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
      <Box w={['full', 'md']} p={[8, 10]} mt={[20, '10vh']} mx="auto" borderRadius={10}>
        <VStack spacing={4} align="flex-start" w="full">
          <VStack spacing={1} align={['flex-start', 'center']} w="full">
            <Image
              src="../public/RaadingRoomLogo.png"
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
          <Button rounded="none" w="full" color="white" colorScheme="blackAlpha" borderRadius="5px">
            Login
          </Button>
        </VStack>
      </Box>
      <br></br>
      <br></br>
      <Box w={['full', 'md']}>
        <Center>
          <Image src="The Blurb" alt="The Blurb" fallbackSrc="" boxSize="100px" objectFit="cover" />
        </Center>
      </Box>
    </Container>
  );
}
