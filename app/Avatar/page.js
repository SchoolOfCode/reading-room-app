"use client";

import { useState, useEffect } from "react";``
import {Flex, Spacer, Box, Image } from "@chakra-ui/react";
// import { fonts } from './fonts.js';
import Avatar from "./components/Avatar.js";
import Backdrop from "./components/Backdrop.js";
// import AvatarWearingCap from "./components/MiffyCap.js";
// import AvatarWearingLoveShades from "./components/MiffyLoveHearts.js";
// import AvatarWearingPixelShades from "./components/MiffyPixelShades.js";
// import AvatarWearingScarf from "./components/MiffyScarf.js";
// import AvatarWearingSunhat from "./components/MiffySunhat.js";
// import AvatarWearingTopHat from "./components/MiffyTopHat.js";
import Shades from "./components/Shades.js";
import PixelShades from "./components/Pixelshades.js";
import LoveHeartShades from "./components/LoveheartShades.js";
import Cap from "./components/Cap.js";
// import Scarf from "./components/scarf.js";

import TopHat from "./components/tophat.js";
import Sunhat from "./components/sunhat.js";
import styles from './Avatar.module.css';

export default function AvatarPage() {
  return (
    <div className={styles.Avatar_page}>
      <Box as="main" spacing={4} alignItems="center" justifyContent="center">
        <h1>The Reward Room</h1>
        <br></br>
        <h2 >Well done!</h2>
        <h2>Choose a Reward and see your avatar update!</h2>
        {/* accessory components put inside a flex box to create responsive design with equal spacing. Also user spacer */}
        <Flex>
          <Box boxsize="sm" >
            <Shades></Shades>
          </Box>
          <Spacer></Spacer>
          <Box boxsize="sm">
            <PixelShades></PixelShades>
          </Box>
          <Spacer></Spacer>
          <Box boxsize="sm">
            <LoveHeartShades></LoveHeartShades>
          </Box>
          <Spacer></Spacer>
        </Flex>
        <Flex>
          <Box boxsize="sm">
            <Cap></Cap>
          </Box>
          <Spacer></Spacer>
          <Box boxsize="sm">
            <Sunhat></Sunhat>
          </Box>
          <Spacer></Spacer>
          <Box boxsize="sm">
            <TopHat></TopHat>
          </Box>
          <Spacer></Spacer>
        </Flex>
        <Flex>
          <Box boxsize="sm">
            <Avatar></Avatar>
          </Box>
        </Flex>
        <Spacer></Spacer>
        <Box boxsize="sm">
        <Flex>
          <Backdrop></Backdrop>
        </Flex>
        </Box>
        {/* N.B. reward items and corresponding avatar wearing the item will need to be added */}
      </Box>
    </div>
  );
}
