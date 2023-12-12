// Image of the avatar chosen by logged in user

"use client";

import { Image } from "@chakra-ui/react";

export default function Avatar() {
  return (
    <Image
      src="https://bit.ly/dan-abramov"
      alt="Dan Abramov"
      boxSize={"200"}
      boxShadow={"dark-lg"}
      borderRadius={"full"}
      mt={"50px"}
    ></Image>
  );
}
