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
          <FormControl width="90%">
            <FormLabel fontSize={18} fontWeight="bold">
              Password
            </FormLabel>
            <Input
              placeholder="🔑 Your password"
              rounded="none"
              variant="filled"
              type="password"
              border="none"
              borderBottom="2px solid #B596C8"
              borderRadius={5}
              _focus={{
                bg: 'blue.50',
                borderColor: '#B596C8',
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
            <Link href="/WelcomePage">
              <Button
                padding="0.6em 2em"
                borderRadius="10px"
                color="white"
                bg="#111"
                position="relative"
                zIndex="0"
                userSelect="none"
                webkitUserSelect="none"
                touchAction="manipulation"
                _before={{
                  content: '""',
                  background:
                    'linear-gradient(45deg, #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000)',
                  position: 'absolute',
                  top: '-2px',
                  left: '-2px',
                  backgroundSize: '400%',
                  zIndex: '-1',
                  filter: 'blur(5px)',
                  webkitFilter: 'blur(5px)',
                  width: 'calc(100% + 4px)',
                  height: 'calc(100% + 4px)',
                  animation: 'glowing-button 20s linear infinite',
                  transition: 'opacity 0.3s ease-in-out',
                  borderRadius: '10px',
                }}
                _after={{
                  zIndex: '-1',
                  content: '""',
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  background: '#222',
                  left: '0',
                  top: '0',
                  borderRadius: '10px',
                }}
                mt={5}
                h="40px"
                fontSize={22}
              >
                Sign in
              </Button>
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
              {/* <Button
                width="100%"
                rounded="none"
                color="white"
                colorScheme="blackAlpha"
                borderRadius="5px"
                border="2px solid #747474"
                mt={5}
                h={isMobile ? 8 : 12}
                fontSize={22}
                bg="#B596C8"
              > */}
              {/* Sign in */}
              {/* </Button> */}
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
