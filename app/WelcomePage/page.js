"use client";

import { Link } from "@chakra-ui/next-js";
import { Box, VStack, flexbox } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { Center, Square, Circle } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";

export default function WelcomePage() {
  return (
    <>
      <Center>
        <VStack spacing={"24px"}>
          <Box
            as="section"
            bg={"#D9D9D6"}
            borderRadius={"lg"}
            w={"75%"}
            marginTop={"5rem"}
          >
            <Center>Welcome back USERNAME!</Center>
          </Box>
          <Image src="https://bit.ly/dan-abramov" alt="Dan Abramov"></Image>
          <Box
            as="section"
            bg={"#D9D9D6"}
            borderRadius={"lg"}
            w={"75%"}
            m={"auto"}
            p={"0.5rem"}
          >
            <Text>
              READING NOTES: Lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat.
            </Text>
          </Box>
          <Box
            display={"flexbox"}
            textAlign={"center"}
            as="section"
            bg={"#D9D9D6"}
            borderRadius={"lg"}
            w={"75%"}
            m={"auto"}
            p={"auto"}
          >
            <Center>
              Go to the Reading Room <br></br>Book<br></br> and continue
              reading!{" "}
            </Center>
          </Box>
        </VStack>
      </Center>
      <button>
        <Link className="returnButton" href="/">
          Return Home
        </Link>
      </button>
    </>
  );
}
