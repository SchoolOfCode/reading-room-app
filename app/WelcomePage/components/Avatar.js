// Image of the avatar chosen by logged in user

"use client";

import { useState, useEffect } from "react";
import { Image } from "@chakra-ui/react";
import { fetchAvatars } from "../../FetchRequests/avatarsFetch.js";
import { Spinner } from "@chakra-ui/react";

export default function Avatar({ avatar }) {
  return (
    <Image
      src={avatar}
      alt="User Avatar"
      boxSize={"200"}
      boxShadow={"dark-lg"}
      borderRadius={"full"}
      mt={"50px"}
    ></Image>
  );
}
