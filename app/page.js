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
  useBreakpointValue,
} from '@chakra-ui/react';
import { fonts } from './fonts';
import { Link } from '@chakra-ui/next-js';

export default function Home() {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Container
      bg="#9BF6FF"
      minHeight="100vh"
      width="100%"
      minWidth="100%"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        w={['full', 'md']}
        borderRadius={10}
        h="100%"
        minH="100%"
        justifyContent="center"
        alignContent="center"
        p={0}
      >
        <VStack spacing={4} align="center" w="full" h="100%">
          <VStack spacing={1} align="center" w="full">
            <Image
              src="RaadingRoomLogo.png"
              alt="The Reading Room Logo"
              fallbackSrc="https://ibb.co/pKDxgyG"
              boxSize="100px"
              objectFit="cover"
              // mt={5}
              h={150}
              w={150}
            />
            <Heading
              as="h1"
              size="xl"
              align="center"
              className={fonts.arvo.className}
              fontSize={40}
              mt={30}
            >
              Jolly good to see you again, my friend!
            </Heading>
            <Text fontSize={18}>Enter your email and password to keep the fun going.</Text>
            <Divider h="3px" borderColor="black"></Divider>
          </VStack>
          <FormControl width="90%">
            <FormLabel fontSize={18} fontWeight="bold">
              E-mail
            </FormLabel>
            <Input
              rounded="none"
              variant="filled"
              type="email"
              borderRadius={10}
              borderColor="#747474"
              _focus={{
                bg: 'blue.50',
                borderColor: '#747474',
              }}
            />
          </FormControl>
          <FormControl width="90%">
            <FormLabel fontSize={18} fontWeight="bold">
              Password
            </FormLabel>
            <Input
              rounded="none"
              variant="filled"
              type="password"
              borderRadius={10}
              borderColor="#747474"
              _focus={{
                bg: 'blue.50',
                borderColor: '#747474',
              }}
            />
          </FormControl>
          <Container
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            width="100%"
          >
            <Link href="/WelcomePage" width="30%">
              <Button
                width="100%"
                rounded="none"
                color="white"
                borderRadius="5px"
                border="2px solid #747474"
                mt={5}
                h={12}
                fontSize={22}
                bg="#B596C8"
              >
                Sign up
              </Button>
            </Link>
            <Link href="/WelcomePage" width="30%">
              <Button
                width="100%"
                rounded="none"
                color="white"
                colorScheme="blackAlpha"
                borderRadius="5px"
                border="2px solid #747474"
                mt={5}
                h={12}
                fontSize={22}
                bg="#B596C8"
              >
                Sign in
              </Button>
            </Link>
          </Container>
        </VStack>
      </Box>
      <Box
        w={['full', 'md']}
        position="absolute"
        bottom={0}
        left={0}
        p={4}
        textAlign={isMobile ? 'center' : 'left'}
      >
        <Center>
          <Image src="the blurb.png" alt="The Blurb" fallbackSrc="" objectFit="cover" h={50} />
        </Center>
      </Box>
    </Container>
  );
}
