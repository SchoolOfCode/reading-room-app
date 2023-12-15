
  // Box showing latest reading notes from logged in user

  "use client";

  import { Text, Icon, HStack } from "@chakra-ui/react";
  import { FaQuoteRight, FaQuoteLeft } from "react-icons/fa";
  import styles from '../welcomePage.module.css';



  export default function ReadingNotes({title, author, notes}) {
    return (
      <div className={styles.pageWrapper}>
        <HStack>
          <Icon as={FaQuoteLeft} color='#1f1f1f' boxSize={30} />
          <Text m={"1rem"} border='0'>
            <b>Summary yesterdays:</b> Last time you read '{title}' by '{author}'. You wrote '{notes}' - keep going, you're doing great!
          </Text>
          <Icon as={FaQuoteRight} color='#1f1f1f' boxSize={30} />
        </HStack>
      </div>
    );
  }
