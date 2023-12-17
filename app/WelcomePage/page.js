"use client";
// Importing the necessary modules and functions
import { useEffect, useState } from "react";
import { VStack, Spinner } from "@chakra-ui/react";
import Welcome from "./components/Welcome.js";
import Avatar from "./components/Avatar.js";
import ReadingNotes from "./components/ReadingNotes.js";
import Continue from "./components/Continue.js";
import { fetchReadingNotes } from "../FetchRequests/fetchAllDataByNickname.js";
import { getCurrentUser } from "../ReadingRoom/components/getCurrentUser.js"; // Adjust the import path

export default function WelcomePage() {
  // declaring state for sessionNotes, loading or not and to set error if needed
  const [sessionNotes, setSessionNotes] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentUsers_id, setCurrentUsers_id] = useState("");

  // obtaining logged-in user's ID
  const setUser = async () => {
    try {
      const user = await getCurrentUser();
      setCurrentUsers_id(user.id);
      console.log(`users_id currently set as: ${user.id}`);
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    setUser();
  }, []);

  // Use effect function to GET data based on currently logged in user's id
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (currentUsers_id) {
          // Use the users_id as a search query in the GET request
          const notes = await fetchReadingNotes(currentUsers_id);
          setSessionNotes(notes);
        }
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [currentUsers_id]); // Include users_id in the dependency array to re-run the effect when users_id changes

  // return spinner whilst loading
  if (loading) {
    return <Spinner />;
  }
  // if things are going wrong, return error
  if (error) {
    return <div>Error fetching reading notes: {error.message}</div>;
  }
  // destructure fetched data to pass down as props
  let nickname, avatar_img, title, author, notes;
  if (sessionNotes) {
    ({
      data: [{ nickname, avatar_img, title, author, notes }],
    } = sessionNotes);
  }

  return (
    <VStack as="main" spacing={12}>
      <Welcome nickname={nickname} />
      <Avatar avatar={avatar_img} />
      <ReadingNotes title={title} author={author} notes={notes} />
      <Continue />
    </VStack>
  );
}
