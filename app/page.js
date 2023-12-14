import { fonts } from './fonts.js';
import React from 'react';
import Head from 'next/head';

const Home = () => {
  const containerStyle = {
    backgroundColor: '#9BF6FF',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const contentBoxStyle = {
    width: '80%',
    maxWidth: '400px',
    padding: '20px',
    margin: 'auto',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    backgroundColor: 'white',
  };

  const vStackStyle = {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const logoImageStyle = {
    width: '80px',
    height: '80px',
    objectFit: 'cover',
    marginBottom: '10px',
  };

  const headingStyle = {
    fontSize: '1.8rem',
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
  };

  const textStyle = {
    textAlign: 'center',
    color: '#555',
  };

  const dividerStyle = {
    height: '2px',
    backgroundColor: '#ccc',
    margin: '15px 0',
  };

  const formControlStyle = {
    marginBottom: '15px',
    width: '90%',
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    marginBottom: '5px',
  };

  const buttonStyle = {
    width: '100%',
    padding: '10px',
    color: 'white',
    backgroundColor: 'black',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  const blurbBoxStyle = {
    width: '100%',
    marginTop: '20px',
  };

  const blurbImageStyle = {
    width: '80px',
    height: '80px',
    objectFit: 'cover',
    marginBottom: '50px',
  };

  return (
    <div style={containerStyle}>
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Arvo:wght@400;700&display=swap"
        />
      </Head>
      <div style={contentBoxStyle}>
        <div style={vStackStyle}>
          <img
            src="../public/RaadingRoomLogo.png"
            alt="The Reading Room Logo"
            fallbackSrc="https://ibb.co/pKDxgyG"
            style={logoImageStyle}
            loading="lazy"
          />
          <h1 style={headingStyle}>Jolly to see you again, my friend!</h1>
          <p style={textStyle}>Enter your email and password to keep the fun going.</p>
          <hr style={dividerStyle} />
          <div style={formControlStyle}>
            <label>Email</label>
            <input style={inputStyle} type="text" />
          </div>
          <div style={formControlStyle}>
            <label>Password</label>
            <input style={inputStyle} type="password" />
          </div>
          <button style={buttonStyle}>Login</button>
        </div>
      </div>
      <div style={blurbBoxStyle}>
        <div style={vStackStyle}>
          <img
            src="The Blurb"
            /* Image not working cos not present in public folder*/ alt="The Blurb"
            style={blurbImageStyle}
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;

// CHAKRA UI CODE
// 'use client';

// import {
//   Container,
//   Heading,
//   Box,
//   VStack,
//   Text,
//   FormControl,
//   FormLabel,
//   Input,
//   Button,
//   Divider,
//   Image,
//   Center,
// } from '@chakra-ui/react';
// import { fonts } from './fonts';

// // console.log(fonts);
// // console.log(fonts.architects_daughter);

// export default function Home() {
//   return (
//     <Container
//       bg="#9BF6FF"
//       height="100vh"
//       width="100%"
//       display="flex"
//       flexDirection="column"
//       justifyContent="center"
//       alignItems="center"
//     >
//       <Box w={['full', 'md']} p={[8, 10]} mt={[20, '10vh']} mx="auto" borderRadius={10}>
//         <VStack spacing={4} align="flex-start" w="full">
//           <VStack spacing={1} align={['flex-start', 'center']} w="full">
//             <Image
//               src="../public/RaadingRoomLogo.png"
//               alt="The Reading Room Logo"
//               fallbackSrc="https://ibb.co/pKDxgyG" // A little help in case the image src doesn't load
//               boxSize="100px"
//               objectFit="cover"
//             />
//             <Heading as="h1" size="xl" align="center" className={fonts.arvo.className}>
//               Jolly to see you again, my friend!
//             </Heading>
//             <Text>Enter your email and password to keep the fun going.</Text>
//             <Divider h="3px" borderColor="black"></Divider>
//           </VStack>
//           <FormControl>
//             <FormLabel>E-mail</FormLabel>
//             <Input rounded="none" variant="filled" />
//           </FormControl>
//           <FormControl>
//             <FormLabel>Password</FormLabel>
//             <Input rounded="none" variant="filled" type="password" />
//           </FormControl>
//           <Button rounded="none" w="full" color="white" colorScheme="blackAlpha" borderRadius="5px">
//             Login
//           </Button>
//         </VStack>
//       </Box>
//       <br></br>
//       <br></br>
//       <Box w={['full', 'md']}>
//         <Center>
//           <Image src="The Blurb" alt="The Blurb" fallbackSrc="" boxSize="100px" objectFit="cover" />
//         </Center>
//       </Box>
//     </Container>
//   );
// }
