"use client";

import React, { useState } from 'react';
import Avatar from './components/Avatar';
import Backdrop from './components/Backdrop';
// Import accessory images
import Shades from './components/Shades';
import PixelShades from './components/Pixelshades';
import LoveShades from './components/LoveHeartShades';
import Cap from './components/Cap';
import Scarf from './components/Scarf';
import Sunhat from './components/Sunhat';
import TopHat from './components/Tophat';
//Avatar wearing accessories
import AvatarWearingShades from './components/MiffyShades';
import AvatarWearingLoveShades from './components/MiffyLoveHearts';
import AvatarWearingPixelShades from './components/MiffyPixelShades';
import AvatarWearingCap from './components/MiffyCap';
import AvatarWearingScarf from './components/MiffyScarf';
import AvatarWearingTopHat from './components/MiffyTopHat';
import AvatarWearingSunhat from './components/MiffySunhat';

const accessoryImages = {
  shades: 'shades.png',
  loveShades: 'loveheartshades.png',
  pixelShades: 'pixel_shades.png',
  cap: 'cap.png',
  tophat: 'tophat.png',
  sunhat: 'sunhat.png',
  scarf: 'scarf_orange.png',
};

const avatarImagesWithAccessories = {
  shades: 'Miffy_shades.png',
  loveShades: 'Miffy_lovehearts.png',
  pixelShades: 'Miffy_pixel_shades.png',
  cap: 'Miffy_cap.png',
  scarf: 'Miffy_scarf_orange.png',
  topHat: 'Miffy_tophat.png',
  sunhat: 'Miffy_Sunhat.png',
};

const CharacterPage = () => {
  const [selectedAccessory, setSelectedAccessory] = useState(null);
  const [characterImage, setCharacterImage] = useState('Miffy.png');

  const handleAccessoryClick = (accessory) => {
    setSelectedAccessory(accessory);
    setCharacterImage(avatarImagesWithAccessories[accessory] || 'Miffy.png'); // Update character image based on selected accessory
  };

  const accessories = ['shades', 'loveShades', 'pixelShades', 'cap', 'scarf', 'tophat', 'sunhat'];

  return (
    <div>
      {/* Render the backdrop with the background image */}
      <Backdrop backgroundImage="Backdrop.png" />

      {/* Render selected character image */}
      <img src={characterImage} alt="Avatar" style={{ width: '200px', height: '300px' }} />

      {/* Display accessories */}
      <div>
        {/* Render accessories above the avatar */}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          {accessories.slice(0, 4).map((accessory, index) => (
            <img
              key={index}
              src={accessoryImages[accessory]} // Render the accessory images
              alt={accessory}
              style={{ width: '50px', height: '50px', cursor: 'pointer', margin: '5px' }}
              onClick={() => handleAccessoryClick(accessory)}
            />
          ))}
        </div>

        {/* Render avatar with selected accessory */}
        <div style={{ position: 'relative', textAlign: 'center' }}>
          {selectedAccessory !== null && (
            <div style={{ position: 'relative' }}>
              <img
                src={avatarImagesWithAccessories[selectedAccessory] || 'Avatar.png'}
                alt="Avatar"
                style={{ width: '100px', height: '100px' }}
              />
            </div>
          )}
        </div>

        {/* Render accessories below the avatar */}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          {accessories.slice(4).map((accessory, index) => (
            <img
              key={index}
              src={accessoryImages[accessory]} // Render the accessory images
              alt={accessory}
              style={{ width: '50px', height: '50px', cursor: 'pointer', margin: '5px' }}
              onClick={() => handleAccessoryClick(accessory)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CharacterPage;
