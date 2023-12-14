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
} from '@chakra-ui/react';
import { fonts } from './fonts';

// Check if fonts is defined
console.log(fonts);

// Check if architects_daughter property exists
console.log(fonts.architects_daughter);

export default function Home() {
  return (
    <Container>
      <Box
        w={['full', 'md']}
        p={[8, 10]}
        mt={[20, '10vh']}
        mx="auto"
        border={['none', '1px']}
        borderColor={['', 'gray.300']}
        borderRadius={10}
      >
        <VStack spacing={4} align="flex-start" w="full">
          <VStack spacing={1} align={['flex-start', 'center']} w="full">
            <Image src="../public/RaadingRoomLogo.png" alt="The Reading Room Logo" />
            <Heading as="h1" size="xl" align="center" className={fonts.arvo.className}>
              Jolly to see you again, my friend!
            </Heading>
            <Text>Enter your email and password to login</Text>
            <Divider></Divider>
          </VStack>
          <FormControl>
            <FormLabel>E-mail</FormLabel>
            <Input rounded="none" variant="filled" />
          </FormControl>
          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input rounded="none" variant="filled" type="password" />
          </FormControl>
          <Button rounded="none" colorScheme="blue" w={['full', 'auto']}>
            Login
          </Button>
        </VStack>
      </Box>
    </Container>
  );
}
