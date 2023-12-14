
  // Box showing latest reading notes from logged in user

  "use client";

  import { Text, Icon } from "@chakra-ui/react";
  import { FaQuoteRight, FaQuoteLeft } from "react-icons/fa";
  import styles from '../../welcomePage.module.css';

  export default function ReadingNotes() {
    return (
      <>
      <div className={styles.pageWrapper}>
      <pageWrapper>
        <Text m={"1rem"} border='0'>
          <b>Summary yesterdays:</b> Last time you read '{title}' by '{author}'. You wrote '{notes}
        ' - keep going, you're doing great!
        </Text>
          <br></br>
        <Icon
              as={FaQuoteLeft}
              color='#1f1f1f'
              boxSize={'30'}
              placement="left"
              onClick={() => handleSetActivePage('WP')}
            />
          <br></br> 
              <Icon
              as={FaQuoteRight}
              color='#1f1f1f'
              boxSize={'30'}
              placement="right"
              onClick={() => handleSetActivePage('WP')}
            />
            </pageWrapper>
            </div>
      </>
    );
  }

