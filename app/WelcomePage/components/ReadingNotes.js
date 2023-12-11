// Box showing latest reading notes from logged in user

"use client";

import { Text, Icon } from "@chakra-ui/react";
import { BiSolidHomeHeart } from 'react-icons/bi';
import { FaQuoteRight, FaQuoteLeft } from "react-icons/fa";

export default function ReadingNotes() {
  return (
    <>
      <Icon
            as={FaQuoteRight}
            color='#1f1f1f'
            boxSize={'30'}
            placement="left"
            onClick={() => handleSetActivePage('WP')}
          />
      <Text m={"1rem"}>
        <b>Summary yesterdays:</b> Wow you read for "stopWatchTime" minutes...
        <br></br>
        <br></br> "Readers previous note"
      </Text>
            <Icon
            as={FaQuoteLeft}
            color='#1f1f1f'
            boxSize={'30'}
            onClick={() => handleSetActivePage('WP')}
          />
    </>
  );
}
