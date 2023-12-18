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
      bg='#9BF6FF'
      height='100vh'
      minH={100}
      width='100%'
      display='flex'
      flexDirection='column'
      justifyContent='center'
      alignItems='center'
    >
      <Box
        w={['full', 'md']}
        borderRadius={10}
        h='100%'
        justifyContent='center'
        alignContent='center'
        p={0}
      >
        <VStack spacing={4} align='center' w='full' h='100%'>
          <VStack spacing={1} align='center' w='full'>
            <Image
              src='RaadingRoomLogo.png'
              alt='The Reading Room Logo'
              fallbackSrc='https://ibb.co/pKDxgyG' // A little help in case the image src doesn't load
              boxSize='100px'
              objectFit='cover'
              mt={10}
              h={150}
              w={150}
            />

            <Heading
              as='h1'
              size='xl'
              align='center'
              className={fonts.arvo.className}
              fontSize={40}
              mt={20}
            >
              Jolly good to see you again, my friend!
            </Heading>
            <Text fontSize={18}>Enter your email and password to keep the fun going.</Text>
            <Divider h='3px' borderColor='black'></Divider>
          </VStack>
          <FormControl>
            <FormLabel fontSize={18} fontWeight='bold'>
              E-mail
            </FormLabel>
            <Input
              rounded='none'
              variant='filled'
              type='email'
              borderRadius={10}
              borderColor='#747474'
              _focus={{
                bg: 'blue.50',
                borderColor: '#747474',
              }}
            />
          </FormControl>
          <FormControl>
            <FormLabel fontSize={18} fontWeight='bold'>
              Password
            </FormLabel>
            <Input
              rounded='none'
              variant='filled'
              type='password'
              borderRadius={10}
              borderColor='#747474'
              _focus={{
                bg: 'blue.50',
                borderColor: '#747474',
              }}
            />
          </FormControl>
          <Link href='/WelcomePage'>
            <Button
              rounded='none'
              color='white'
              colorScheme='blackAlpha'
              borderRadius='5px'
              mt={5}
              h={12}
              w={90}
              fontSize={20}
              bg='#B596C8'
            >
              Login
            </Button>
          </Link>
        </VStack>
      </Box>
      <Box w={['full', 'md']}>
        <br />
        <Center>
          <Image
            src='the blurb.png'
            alt='The Blurb'
            fallbackSrc=''
            objectFit='cover'
            h={75}
            marginBottom={40}
          />
        </Center>
      </Box>
    </Container>
  );
}
