'use client';

import { useState, useEffect } from 'react';
import { fonts } from '../fonts.js';
import { Flex, Spacer, Box, Image, Heading, Center, Divider } from '@chakra-ui/react';
// import { fonts } from './fonts.js';
import Avatar from './components/Avatar.js';
import Backdrop from './components/Backdrop.js';
// import AvatarWearingCap from "./components/MiffyCap.js";
// import AvatarWearingLoveShades from "./components/MiffyLoveHearts.js";
// import AvatarWearingPixelShades from "./components/MiffyPixelShades.js";
// import AvatarWearingScarf from "./components/MiffyScarf.js";
// import AvatarWearingSunhat from "./components/MiffySunhat.js";
// import AvatarWearingTopHat from "./components/MiffyTopHat.js";
import Shades from './components/Shades.js';
import PixelShades from './components/Pixelshades.js';
import LoveHeartShades from './components/LoveheartShades.js';
import Cap from './components/Cap.js';
// import Scarf from "./components/scarf.js";
import TopHat from './components/Tophat.js';
import Sunhat from './components/Sunhat.js';

export default function AvatarPage() {
  return (
    <>
      <Box as='main' spacing={4} alignItems='center' justifyContent='center'>
        <Center>
          <Heading as='h1' size='xl' className={fonts.arvo.className} mt={'1.9rem'}>
            The Reward Room
          </Heading>
        </Center>
        <Spacer></Spacer>
        <Heading as='h2' size='l' className={fonts.arvo.className}>
          Well done!
        </Heading>
        <Heading as='h2' size='l' className={fonts.arvo.className}>
          Choose a Reward and see your avatar update!
        </Heading>
        {/* accessory components put inside a flex box to create responsive design with equal spacing. Also user spacer */}
        <Flex>
          <Box boxsize='sm'>
            <Shades></Shades>
          </Box>
          <Spacer></Spacer>
          <Box boxsize='sm'>
            <PixelShades></PixelShades>
          </Box>
          <Spacer></Spacer>
          <Box boxsize='sm'>
            <LoveHeartShades></LoveHeartShades>
          </Box>
          <Spacer></Spacer>
        </Flex>
        <Flex>
          <Box boxsize='sm'>
            <Cap></Cap>
          </Box>
          <Spacer></Spacer>
          <Box boxsize='sm'>
            <Sunhat></Sunhat>
          </Box>
          <Spacer></Spacer>
          <Box boxsize='sm'>
            <TopHat></TopHat>
          </Box>
          <Spacer></Spacer>
        </Flex>
        <Flex>
          <Box boxsize='sm'>
            <Backdrop></Backdrop>
            <Avatar></Avatar>
          </Box>
        </Flex>
        {/* <Spacer></Spacer>
        <Box boxsize='sm'>
          <Flex>
          </Flex>
        </Box> */}
        {/* N.B. reward items and corresponding avatar wearing the item will need to be added */}
      </Box>
    </>
  );
}
