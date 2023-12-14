
'use client';
import { Box, Heading } from "@chakra-ui/react";
import { fonts } from "../../fonts.js";
import styles from 'app/welcomePage.module.css';

// Box showing welcoome message to the logged in user




export default function Welcome({ nickname }) {


  return (

    <Box
      bg="#CAFFBF" 
      display="flex"
      justifyContent="center"
      alignItems="center"
      border='0'
    >
      <div className={styles.pageWrapper}>
        <div className={styles.container}>
          <Heading as="h1" size="xl" className={fonts.arvo.className}>
            Welcome back USERNAME!
          </Heading>
          {/* Other content */}
        </div>
      </div>
    </Box>

  );
}

// declare state for username & reading note
// Use useEffect to call the Fetch request, and update the state with the result of that fetch request
