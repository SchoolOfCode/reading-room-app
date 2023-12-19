"use client";
import { useEffect, useState } from "react";
import { VStack, Spinner } from "@chakra-ui/react";
import Welcome from "./components/Welcome.js";
import Avatar from "./components/Avatar.js";
import ReadingNotes from "./components/ReadingNotes.js";
import Continue from "./components/Continue.js";
import { fetchReadingNotes } from "../../FetchRequests/fetchAllDataByNickname.js";

export default function WelcomePage() {
  // declaring state for sessionNotes, loading or not and to set error if needed
  const [sessionNotes, setSessionNotes] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // Use effect function to make prompt the user for their nickname, then fetch the reading notes based on that nickname
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (currentUsers_id) {
          // Use the users_id as a search query in the GET request
          const notes = await fetchReadingNotes(currentUsers_id);
          setSessionNotes(notes.data[notes.data.length - 1]);
          console.log(sessionNotes);
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
  let { nickname, avatar_img, title, author, notes } = sessionNotes || {};

  return (
    <VStack as="main" spacing={12} bg="#CAFFBF" p={3} m={0} minHeight="100vh">
      <Avatar avatar={avatar_img || "Miffy.png"} />
      <Welcome nickname={nickname || "friend!"} />
      <ReadingNotes
        title={title || false}
        author={author || "test"}
        notes={notes || "test"}
      />
      <Continue />
    </VStack>
  );
}
