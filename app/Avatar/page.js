
'use client';

import { useState, useEffect } from "react";
import { Container, Flex, Heading, Text, Button } from "@chakra-ui/react";
import { Image, VStack } from "@chakra-ui/react";
import Avatar from "./components/Avatar.js";
import Backdrop from "./components/Backdrop.js";
import AvatarWearingCap from "./components/MiffyCap.js";  
import AvatarWearingLoveShades from "./components/MiffyLoveHearts.js";
import AvatarWearingPixelShades from "./components/MiffyPixelShades.js";
import AvatarWearingScarf from "./components/MiffyScarf.js";
import AvatarWearingSunhat from "./components/MiffySunhat.js";
import AvatarWearingTopHat from "./components/MiffyTopHat.js";``


export default function AvatarPage () {
  return (
    <>
    <VStack spacing={4}>
    <h1>Well done!</h1>
    <h2>Choose a Reward and see your avatar update!</h2>
    <Avatar></Avatar>
    <Backdrop></Backdrop>
{/* N.B. reward items and corresponding avatar wearing the item will need to be added */}
    </VStack>
    </>
  )
}