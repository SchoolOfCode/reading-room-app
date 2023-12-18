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
        maxW={['auto', '75vh']}
        maxH={['auto', '70vh']}
        borderRadius={10}
        justifyContent="center"
        alignContent="center"
        p={2}
        paddingBottom={isMobile ? 5 : 0}
        border="1px solid #747474"
        boxShadow="rgb(44, 62, 80) 0px -15px 15px -15px, rgb(44, 62, 80) 0px 15px 15px -15px;"
        ml={isMobile ? 2 : 0}
        mr={isMobile ? 2 : 0}
      >
        <VStack spacing={3} align="center" w="auto" h="auto">
          {/* <VStack spacing={1} align="center" w="full"> */}
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
            width="95%"
            className={fonts.arvo.className}
            fontSize={35}
          >
            Jolly good to see you again, my friend!
          </Heading>
          <Text fontSize={20} align="center" width="95%">
            Enter your email and password to keep the fun going. 🎉
          </Text>
          <Divider h="3px" width="95%" borderColor="#747474"></Divider>
          {/* </VStack> */}
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
              <GlowingButton>Sign up</GlowingButton>
            </Link>
          </Container>
          <Container
            display="flex"
            flexDirection="row"
            justifyContent="center"
            alignItems="center"
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
