"use client";

// import { useState, useEffect } from "react";
// import { Container, Flex, Heading, Text, Button } from "@chakra-ui/react";
import { VStack, Flex, Spacer, Box } from "@chakra-ui/react";
import Avatar from "./components/Avatar.js";
import Backdrop from "./components/Backdrop.js";
// import AvatarWearingCap from "./components/MiffyCap.js";
// import AvatarWearingLoveShades from "./components/MiffyLoveHearts.js";
// import AvatarWearingPixelShades from "./components/MiffyPixelShades.js";
// import AvatarWearingScarf from "./components/MiffyScarf.js";
// import AvatarWearingSunhat from "./components/MiffySunhat.js";
// import AvatarWearingTopHat from "./components/MiffyTopHat.js";
import Shades from "./components/shades.js";
import PixelShades from "./components/pixelshades.js";
import LoveHeartShades from "./components/loveheartShades.js";
import Cap from "./components/cap.js";
// import Scarf from "./components/scarf.js";
import TopHat from "./components/tophat.js";
import Sunhat from "./components/sunhat.js";
``;

export default function AvatarPage() {
  return (
    <>
      <Box as="main" spacing={4} bg="#FDFFAB">
        <h1>Well done!</h1>
        <h2>Choose a Reward and see your avatar update!</h2>
        <Flex>
          <Box w="100px" h="20px">
            <Shades></Shades>
          </Box>
          <Spacer></Spacer>
          <Box w="100px" h="20px">
            <PixelShades></PixelShades>
          </Box>
          <Spacer></Spacer>
          <Box w="100px" h="20px">
            <LoveHeartShades></LoveHeartShades>
          </Box>
          <Spacer></Spacer>
        </Flex>
        <Flex>
          <Box w="100px" h="20px">
          <Cap></Cap>
          </Box>
          <Spacer></Spacer>
          <Box w="100px" h="20px">
          <Sunhat></Sunhat>
          </Box>
          <Spacer></Spacer>
          <Box w="100px" h="20px">
          <TopHat></TopHat>
          </Box>
          <Spacer></Spacer>
        </Flex>
        
        
        <Avatar></Avatar>
        <Backdrop></Backdrop>
        {/* N.B. reward items and corresponding avatar wearing the item will need to be added */}
      </Box>
    </>
  );
}
