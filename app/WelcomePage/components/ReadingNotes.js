// Box showing latest reading notes from logged in user
"use client";

import { Text, Icon } from "@chakra-ui/react";

import { FaQuoteRight, FaQuoteLeft } from "react-icons/fa";

export default function ReadingNotes({ title, author, notes }) {
  return (
    <>
      <Text m={"1rem"}>
        <Icon
          as={FaQuoteLeft}
          color="#1f1f1f"
          boxSize={"30"}
          placement="left"
          onClick={() => handleSetActivePage("WP")}
        />
        <br></br> Last time you read '{title}' by '{author}'. You wrote '{notes}
        ' - keep going, you're doing great!
      </Text>
      <Icon
        as={FaQuoteRight}
        color="#1f1f1f"
        boxSize={"30"}
        placement="right"
        onClick={() => handleSetActivePage("WP")}
      />
    </>
  );
}
