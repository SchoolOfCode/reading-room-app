"use client";
import { useEffect, useState } from "react";
import { VStack, Spinner } from "@chakra-ui/react";
import Welcome from "./components/Welcome.js";
import Avatar from "./components/Avatar.js";
import ReadingNotes from "./components/ReadingNotes.js";
import Continue from "./components/Continue.js";
import { fetchReadingNotes } from "../FetchRequests/fetchAllDataByNickname.js";

export default function WelcomePage() {
  // declaring state for sessionNotes, loading or not and to set error if needed
  const [sessionNotes, setSessionNotes] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // Use effect function to make prompt the user for their nickname, then fetch the reading notes based on that nickname
  useEffect(() => {
    const fetchData = async () => {
      try {
        const userInput = prompt("What's your nickname?");
        if (userInput) {
          const notes = await fetchReadingNotes(userInput);
          setSessionNotes(notes);
        }
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  // return spinner whilst loading
  if (loading) {
    return <Spinner />;
  }
  // if things are going wrong, return error
  if (error) {
    return <div>Error fetching reading notes: {error.message}</div>;
  }
  // destructure fetched data to pass down as props
  const {
    status,
    data: [{ id, date, title, author, notes, users_id, nickname, avatar_img }],
  } = sessionNotes;

  return (
    <VStack as="main" spacing={12}>
      <Welcome nickname={nickname} />
      <Avatar avatar={avatar_img} />
      <ReadingNotes title={title} author={author} notes={notes} />
      <Continue />
    </VStack>
  );
}
