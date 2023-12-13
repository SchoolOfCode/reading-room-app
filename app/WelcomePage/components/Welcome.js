import { Box, Heading } from "@chakra-ui/react";
import { fonts } from "../../fonts.js";
import styles from 'app/welcomePage.module.css';

export default function Welcome() {
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
          <Heading as="h1" size="xl" className={fonts.architects_daughter.className}>
            Welcome back USERNAME!
          </Heading>
          {/* Other content */}
        </div>
      </div>
    </Box>
  );
}
