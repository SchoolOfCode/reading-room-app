"use client";

import React, { useState } from 'react';
import Avatar from './components/Avatar';
import Backdrop from './components/Backdrop';
// Import accessory images
import AvatarWearingShades from './components/MiffyShades';
import AvatarWearingLoveShades from './components/MiffyLoveHearts';
import AvatarWearingPixelShades from './components/MiffyPixelShades';
import AvatarWearingCap from './components/MiffyCap';
import AvatarWearingScarf from './components/MiffyScarf';
import AvatarWearingTopHat from './components/MiffyTopHat';
import AvatarWearingSunhat from './components/MiffySunhat';

const CharacterPage = () => {
  const [selectedAccessory, setSelectedAccessory] = useState(null);
  const [characterImage, setCharacterImage] = useState('defaultImage.png'); // Placeholder default image

  const handleAccessoryClick = (accessory) => {
    setSelectedAccessory(accessory);
    setCharacterImage(accessoryImages[accessory]); // Update character image based on selected accessory
  };

  const accessories = ['shades', 'loveShades', 'pixelShades', 'cap', 'scarf', 'topHat', 'sunhat'];

  // Define accessory images object
  const accessoryImages = {
    shades: AvatarWearingShades,
    loveShades: AvatarWearingLoveShades,
    pixelShades: AvatarWearingPixelShades,
    cap: AvatarWearingCap,
    scarf: AvatarWearingScarf,
    topHat: AvatarWearingTopHat,
    sunhat: AvatarWearingSunhat,
  };

  return (
    <div>
      {/* Render the backdrop with the background image */}
      <Backdrop backgroundImage="Backdrop.png" />

      {/* Ensure selectedAccessory is defined before rendering Avatar */}
      {selectedAccessory !== null && (
        <div style={{ position: 'relative' }}>
       <img src="Avatar.png" alt="Avatar" style={{ width: '100px', height: '100px' }} />
          <Avatar accessory={selectedAccessory} />
        </div>
      )}

      {/* Render selected character image */}
      <img src={characterImage} alt="Avatar" style={{ width: '200px', height: '300px' }} />

      {/* Render accessories */}
      <div>
        {accessories.map((accessory, index) => (
          <img
            key={index}
            src={accessoryImages[accessory]} // Render the accessory images
            alt={accessory}
            style={{ width: '50px', height: '50px', cursor: 'pointer' }}
            onClick={() => handleAccessoryClick(accessory)}
          />
        ))}
      </div>
    </div>
  );
};

export default CharacterPage;