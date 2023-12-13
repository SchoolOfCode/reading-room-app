// Image of the avatar chosen by logged in user

"use client";

import { Image } from "@chakra-ui/react";

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
