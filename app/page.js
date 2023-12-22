// page.js

"use client";

// BEFORE MERGING, CHECK THE CHANGES AND KEEP THE ONES ON 'MAIN' BRANCH FOR THE LOVE OF GOD

import { signIn, signUp } from "./auth.js";
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
  InputGroup,
  InputLeftElement,
  InputRightElement,
  useBreakpointValue,
  IconButton,
} from "@chakra-ui/react";

import PasswordInput from "./components/PasswordInput";
import { GlowingButton } from "./components/SignInButton";

import { fonts } from "./fonts";
import { Link } from "@chakra-ui/next-js";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // Variable to guarantee responsiveness on different screen size
  const isMobile = useBreakpointValue({ base: true, md: false });
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  async function handleSignIn() {
    const data = { email, password };
    await signIn(data);
  }
  async function handleSignUp() {
    const data = { email, password };
    await signUp(data);
  }
  return (
    <Container
      bg="#9BF6FF"
      minHeight="100vh"
      width="100%"
      minWidth="100%"
      display="flex"
      flexDirection="column"
      // justifyContent="center"
      alignItems="center"
      pt={10}
      mx="auto" //
    >
      <Box
        bg="white"
        maxW={["auto", "75vh"]}
        maxH="90vh"
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
            h={130}
            w={150}
          />
          <Heading
            as="h1"
            size="xl"
            align="center"
            width="95%"
            className={fonts.arvo.className}
            fontSize={25}
          >
            Jolly good to see you again, my friend!
          </Heading>
          <Text fontSize={15} align="center" width="95%">
            Enter your email and password to keep the fun going. 🎉
          </Text>
          <Divider h="3px" width="95%" borderColor="#747474"></Divider>
          {/* </VStack> */}
          <FormControl action={signIn} width="90%">
            <FormLabel fontSize={18} fontWeight="bold">
              E-mail
            </FormLabel>
            <InputGroup>
              <InputLeftElement pointerEvents="none">📧</InputLeftElement>
              <Input
                placeholder="Your email address"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                rounded="none"
                variant="filled"
                type="email"
                border="none"
                borderBottom="2px solid #B596C8"
                borderRadius={5}
                _focus={{
                  bg: "blue.50",
                  borderColor: "#B596C8",
                }}
                required
              />
            </InputGroup>
          </FormControl>

          <FormControl width="90%">
            <FormLabel fontSize={18} fontWeight="bold">
              Password
            </FormLabel>
            <InputGroup>
              <InputLeftElement pointerEvents="none">🔑</InputLeftElement>
              <Input
                placeholder="Your password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                rounded="none"
                variant="filled"
                type={showPassword ? "text" : "password"}
                border="none"
                borderBottom="2px solid #B596C8"
                borderRadius={5}
                _focus={{
                  bg: "blue.50",
                  borderColor: "#B596C8",
                }}
              />
              <InputRightElement>
                <IconButton
                  aria-label={showPassword ? "Hide Password" : "Show Password"}
                  icon={showPassword ? <FaEyeSlash /> : <FaEye />}
                  onClick={togglePasswordVisibility}
                  variant="ghost"
                />
              </InputRightElement>
            </InputGroup>
          </FormControl>

          <Container
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            width="100%"
          >
            <span onClick={() => handleSignIn()}>
              <GlowingButton>Sign in</GlowingButton>
            </span>
          </Container>
          <Container
            display="flex"
            flexDirection="row"
            justifyContent="center"
            alignItems="center"
            gap={2}
            fontSize={15}
            fontWeight="bold"
            mt={isMobile ? 0 : 8}
            mb={isMobile ? 0 : 8}
          >
            <Text>Enter your details above to </Text>

            <Text onClick={() => handleSignUp()} color="#C683D7">
              Sign up
            </Text>
          </Container>
        </VStack>
      </Box>
      <Box
        w={["full", "md"]}
        position="relative"
        // bottom={0}
        // left={0}
        p={4}
        textAlign={isMobile ? "center" : "left"}
      >
        <Center gap={2}>
          <Text fontSize={15} fontWeight="bold">
            Powered by
          </Text>
          <Image
            src="the blurb.png"
            alt="The Blurb"
            fallbackSrc=""
            objectFit="cover"
            h={50}
          />
        </Center>
      </Box>
    </Container>
  );
}
