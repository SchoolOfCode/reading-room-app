// Image of the avatar chosen by logged in user

"use client";

import { Image, VStack } from "@chakra-ui/react";


export default function Avatar() {
  return (
    <VStack spacing={4}>
    <Image
      src="Miffy.png" alt="MiffyAvatar"
    ></Image>
    </VStack>
  );
}