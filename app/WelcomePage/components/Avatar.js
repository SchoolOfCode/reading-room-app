// Image of the avatar chosen by logged in user

"use client";
import { useState, useEffect } from "react";
import { Image } from "@chakra-ui/react";
import { fetchAvatars } from "../../FetchRequests/avatarsFetch.js";
import { Spinner } from "@chakra-ui/react";

export default function Avatar() {
  const [avatar, setAvatar] = useState(null); // Start with null or a default avatar URL

  useEffect(() => {
    (async () => {
      try {
        const sessionAvatar = await fetchAvatars();
        setAvatar(sessionAvatar.avatar);
      } catch (error) {
        console.error("Error fetching avatars:", error);
      }
    })();
  }, []); // Empty dependency array to run effect only once on mount

  if (avatar === null) {
    // Return a spinner or a default loading state while avatar is being fetched
    return <Spinner />;
  }

  return (
    <Image src={avatar} alt="User Avatar" boxSize={150} boxShadow="dark-lg" />
  );
}
