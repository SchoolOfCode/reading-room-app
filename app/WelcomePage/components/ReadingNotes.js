// Box showing latest reading notes from logged in user
"use client";
import { useState, useEffect } from "react";
import { fetchReadingNotes } from "../../FetchRequests/readingNotesFetch.js";
import { Spinner } from "@chakra-ui/react";
import { Box, Text } from "@chakra-ui/react";

export default function ReadingNotes() {
  const [note, setNote] = useState(
    "This is where your first reading summary will go!"
  );
  const [author, setAuthor] = useState("Your new favourite author");
  const [title, setTitle] = useState("Your new favourite book");

  // using useEffect to make the fetch request
  useEffect(() => {
    (async () => {
      try {
        const sessionNote = await fetchReadingNotes();
        console.log(`sessionNote = ${sessionNote}`);
        setNote(`'${sessionNote.note}'`);
        setAuthor(`'${sessionNote.author}'`);
        setTitle(`'${sessionNote.title}'`);
      } catch (error) {
        console.error("Error fetching reading notes:", error);
      }
    })();
  }, []); // Empty dependency array to run effect only once on mount

  if (title === "Your new favourite book") {
    return <Spinner />;
  }

  return (
    <Box
      as="section"
      bg={"#00b64c"}
      borderRadius={"lg"}
      w={"75%"}
      m={"auto"}
      p={"0.5rem"}
      boxShadow={"dark-lg"}
    >
      <Text>
        Last time you read {title} by {author}. You wrote {note} - keep going,
        you're doing great!
      </Text>
    </Box>
  );
}
