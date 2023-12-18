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

import PasswordInput from './components/PasswordInput';
import { GlowingButton } from './components/SignInButton';

import { fonts } from './fonts';
import { Link } from '@chakra-ui/next-js';

export default function Home() {
  // Variable to guarantee responsiveness on different screen size
  // First value is for mobile size, second value is for computer size
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
      p={0}
    >
      <Box
        bg="white"
        w={['auto', '75vh']}
        h={['auto', '70vh']}
        borderRadius={10}
        justifyContent="center"
        alignContent="center"
        p={2}
        paddingBottom={isMobile ? 5 : 0}
        border="1px solid black"
        boxShadow="rgb(44, 62, 80) 0px -15px 15px -15px, rgb(44, 62, 80) 0px 15px 15px -15px;"
        ml={isMobile ? 2 : 0}
        mr={isMobile ? 2 : 0}
      >
        <VStack spacing={4} align="center" w="full" h="100%" mt={isMobile ? 0 : 10}>
          <VStack spacing={1} align="center" w="full">
            <Image
              src="RaadingRoomLogo.png"
              alt="The Reading Room Logo"
              fallbackSrc="https://ibb.co/pKDxgyG"
              boxSize="100px"
              objectFit="cover"
              h={150}
              w={150}
            />
            <Heading
              as="h1"
              size="xl"
              align="center"
              className={fonts.arvo.className}
              fontSize={35}
            >
              Jolly good to see you again, my friend!
            </Heading>
            <Text fontSize={20} align="center">
              Enter your email and password to keep the fun going. 🎉
            </Text>
            <Divider h="3px" width="95%" borderColor="black"></Divider>
          </VStack>
          <FormControl width="90%">
            <FormLabel fontSize={18} fontWeight="bold">
              E-mail
            </FormLabel>
            <Input
              placeholder="📧 Your email address"
              rounded="none"
              variant="filled"
              type="email"
              border="none"
              borderBottom="2px solid #B596C8"
              borderRadius={5}
              _focus={{
                bg: 'blue.50',
                borderColor: '#B596C8',
              }}
            />
          </FormControl>
          <PasswordInput />
          <Container
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            width="100%"
          >
            <Link href="/WelcomePage">
              <GlowingButton />
            </Link>
          </Container>
          <Container
            align="start"
            display="flex"
            flexDirection="row"
            gap={2}
            fontSize={20}
            fontWeight="bold"
            mt={isMobile ? 0 : 12}
          >
            <Text>Don't have an account?</Text>
            <Link href="/WelcomePage">
              <Text color="#C683D7">Sign up</Text>
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
