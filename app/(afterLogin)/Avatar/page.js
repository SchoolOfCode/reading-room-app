'use client';

import React, { useState, useEffect } from 'react';
import { Button, Heading } from '@chakra-ui/react';
import { fonts } from '../../fonts.js';
import Avatar from './components/Avatar.js';
import Backdrop from './components/Backdrop.js';
//import accessories
import Shades from './components/Shades.js';
import PixelShades from './components/Pixelshades.js';
import LoveShades from './components/LoveHeartShades.js';
import Cap from './components/Cap.js';
import Scarf from './components/Scarf.js';
import Sunhat from './components/Sunhat.js';
import TopHat from './components/Tophat.js';
// Avatar wearing accessories
import AvatarWearingShades from './components/MiffyShades.js';
import AvatarWearingLoveShades from './components/MiffyLoveHearts.js';
import AvatarWearingPixelShades from './components/MiffyPixelShades.js';
import AvatarWearingCap from './components/MiffyCap.js';
import AvatarWearingScarf from './components/MiffyScarf.js';
import AvatarWearingTopHat from './components/MiffyTopHat.js';
import AvatarWearingSunhat from './components/MiffySunhat.js';
//arrows for navigating through gallery//
import { FaArrowCircleLeft } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";


const CharacterPage = () => {
  const [characterImage, setCharacterImage] = useState('Miffy.png');
  const [selectedAccessoryIndex, setSelectedAccessoryIndex] = useState(0);
  const accessories = ['shades', 'loveShades', 'pixelShades', 'cap', 'scarf', 'tophat', 'sunhat'];

  const accessoryImages = {
    shades: 'shades.png',
    loveShades: 'loveheartshades.png',
    pixelShades: 'pixel_shades.png',
    cap: 'cap.png',
    scarf: 'scarf_orange.png',
    tophat: 'tophat.png',
    sunhat: 'sunhat.png',
  };

  const wearingAccessoryIndex = {
    miffyWearingShades: 'Miffy_shades.png',
    miffyWearingLoveShades: 'Miffy_lovehearts.png',
    miffyWearingPixelShades: 'Miffy_pixel_shades.png',
    miffyWearingCap: 'Miffy_cap.png',
    miffyWearingSunhat: 'Miffy_Sunhat.png',
    miffyWearingTopHat: 'Miffy_top_hat.png',
    miffyWearingScarf: 'Miffy_orange_scarf.png',
  };

  const handleNextAccessory = () => {
    const nextIndex = (selectedAccessoryIndex + 1) % accessories.length;
    setSelectedAccessoryIndex(nextIndex);
  };

  const handlePrevAccessory = () => {
    const prevIndex = (selectedAccessoryIndex - 1 + accessories.length) % accessories.length;
    setSelectedAccessoryIndex(prevIndex);
  };

  const handleApplyAccessory = () => {
    const selectedAccessory = accessories[selectedAccessoryIndex];
    const imageWithAccessory = wearingAccessoryIndex[`miffyWearing${selectedAccessory.charAt(0).toUpperCase() + selectedAccessory.slice(1)}`];
    setCharacterImage(imageWithAccessory || 'Miffy.png');
  };

  const handleRemoveAccessory = () => {
    setCharacterImage('Miffy.png'); 
    setSelectedAccessoryIndex(0); 
  };

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * accessories.length);
    setSelectedAccessoryIndex(randomIndex);
    handleApplyAccessory('Miffy_shades.png'); 
  }, []);

  return (
    <div style={{ backgroundColor: '#FDFFB6', padding: '2rem' }}>
        <Heading m={5} className={fonts.arvo.className} textAlign="center">
          Rewards Room - Congratulations!
        </Heading>
      <h2 style={{ textAlign: 'center', margin: '5px', fontSize: '2rem' }} className={fonts.arvo.className} textAlign="center">
        Choose an accessory for Miffy
      </h2>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px', position: 'relative' }}>
          <FaArrowCircleLeft
            onClick={handlePrevAccessory}
            style={{
              background: 'none',
              border: 'none',
              fontSize: '2rem',
              cursor: 'pointer',
              position: 'absolute',
              left: '-5rem',
              top: '50%',
              transform: 'translateY(-50%)',
            }}
          />
          <div style={{ width: '2rem' }}></div>
          <div
            style={{
              border: '2px solid black',
              borderRadius: '8px',
              padding: '2rem',
              position: 'relative',
              width: 'fit-content', 
            }}
          >
            <img
              src={`./${accessoryImages[accessories[selectedAccessoryIndex]]}`}
              alt='Accessory'
              style={{ width: '100px', height: '100px', margin: '5px' }}
            />
          </div>
          <FaArrowCircleRight
            onClick={handleNextAccessory}
            style={{
              background: 'none',
              border: 'none',
              fontSize: '2rem',
              cursor: 'pointer',
              position: 'absolute',
              right: '-5rem',
              top: '50%',
              transform: 'translateY(-50%)',
            }}
          />
        </div>
        {selectedAccessoryIndex !== null && (
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
           <Button
          padding="0.6em 2em"
          borderRadius="10px"
          color="white"
          bg="#111"
          fontSize={22}
          className={fonts.arvo.className}
          onClick={handleApplyAccessory}
          position="relative"
          overflow="hidden"
          style={{
            position: 'relative',
            background: 'black', // Set the button background color to black
            border: '3px solid transparent', // Set a solid transparent border
            backgroundImage: 'linear-gradient(45deg, #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000)', // Apply the rainbow gradient as a background image for the border
            borderRadius: '10px', // Maintain the button's border-radius
            zIndex: '0',
            userSelect: 'none',
            WebkitUserSelect: 'none',
            touchAction: 'manipulation',
          }}
          _before={{
            content: '""',
            background:
              'linear-gradient(45deg, #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000)',
            position: 'absolute',
            top: '-2px',
            left: '-2px',
            backgroundSize: '400%',
            zIndex: '-1',
            filter: 'blur(5px)',
            WebkitFilter: 'blur(5px)',
            width: 'calc(100% + 4px)',
            height: 'calc(100% + 4px)',
            animation: 'glowing-button-85 20s linear infinite',
            transition: 'opacity 0.3s ease-in-out',
            borderRadius: '10px',
            '@keyframes glowing-button-85': {
              '0%': {
                backgroundPosition: '0 0',
              },
              '50%': {
                backgroundPosition: '400% 0',
              },
              '100%': {
                backgroundPosition: '0 0',
              },
            },
          }}
          _after={{
            zIndex: '-1',
            content: '""',
            position: 'absolute',
            width: '100%',
            height: '100%',
            background: '#222',
            left: '0',
            top: '0',
            borderRadius: '10px',
          }}
          mt={3}
        >
          Apply
        </Button>
        <Button
          padding="0.6em 2em"
          borderRadius="10px"
          color="white"
          bg="#111"
          fontSize={25}
          className={fonts.arvo.className}
          onClick={handleRemoveAccessory}
          position="relative"
          overflow="hidden"
          style={{
            position: 'relative',
            background: 'black', // Set the button background color to black
            border: '3px solid transparent', // Set a solid transparent border
            backgroundImage: 'linear-gradient(45deg, #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000)', // Apply the rainbow gradient as a background image for the border
            borderRadius: '10px', // Maintain the button's border-radius
            zIndex: '0',
            userSelect: 'none',
            WebkitUserSelect: 'none',
            touchAction: 'manipulation',
          }}
          _before={{
            content: '""',
            background:
              'linear-gradient(45deg, #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000)',
            position: 'absolute',
            top: '-2px',
            left: '-2px',
            backgroundSize: '400%',
            zIndex: '-1',
            filter: 'blur(5px)',
            WebkitFilter: 'blur(5px)',
            width: 'calc(100% + 4px)',
            height: 'calc(100% + 4px)',
            animation: 'glowing-button-85 20s linear infinite',
            transition: 'opacity 0.3s ease-in-out',
            borderRadius: '10px',
            '@keyframes glowing-button-85': {
              '0%': {
                backgroundPosition: '0 0',
              },
              '50%': {
                backgroundPosition: '400% 0',
              },
              '100%': {
                backgroundPosition: '0 0',
              },
            },
          }}
          _after={{
            zIndex: '-1',
            content: '""',
            position: 'absolute',
            width: '100%',
            height: '100%',
            background: '#222',
            left: '0',
            top: '0',
            borderRadius: '10px',
          }}
          mt={3}
        >
          Remove
        </Button>
          </div>
        )}
        <div style={{ display: 'flex', justifyContent: 'center', position: 'relative' }}>
          <img src={`./${characterImage}`} alt='Avatar' style={{ width: '400px', height: '400px' }} />
        </div>
      </div>  
    </div>
  );
};

export default CharacterPage;