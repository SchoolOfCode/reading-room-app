// Image of the avatar chosen by logged in user

"use client";
import { useState, useEffect } from "react";
import { Image } from "@chakra-ui/react";
import { fetchAvatars } from "../../FetchRequests/avatarsFetch.js";

export default function Avatar() {
  const [avatar, setAvatar] = useState("https://bit.ly/dan-abramov");

  useEffect(() => {
    (async () => {
      try {
        const sessionAvatar = await fetchAvatars();
        // console.log(`sessionNote = ${sessionNote}`);
        setAvatar(sessionAvatar.avatar);
      } catch (error) {
        console.error("Error fetching avatars:", error);
      }
    })();
  }, []); // Empty dependency array to run effect only once on mount

  return (
    <Image
      src={avatar}
      alt="Dan Abramov"
      boxSize={150}
      boxShadow={"dark-lg"}
    ></Image>
  );
}
