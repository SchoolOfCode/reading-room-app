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
  scarf: 'Miffy_orange_scarf.png',
  tophat: 'Miffy_top_hat.png',
  sunhat: 'Miffy_Sunhat.png',
};

const CharacterPage = () => {
  const [characterImage, setCharacterImage] = useState('Miffy.png');
  const accessories = ['shades', 'loveShades', 'pixelShades', 'cap', 'scarf', 'tophat', 'sunhat'];

  const handleAccessoryClick = (accessory) => {
    setCharacterImage(avatarImagesWithAccessories[accessory] || 'Miffy.png');
  };
  const handleRemoveAccessories = () => {
        setCharacterImage('Miffy.png');
  };
  return (
    <div style={{ backgroundColor: '#FDFFB6', padding: '2rem', position: 'relative' }}>
      <h2 style={{ textAlign: 'center', margin: '5px', fontSize: '2rem' }}>Choose an accessory for Miffy</h2>
  
      {/* Accessories */}
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
        {accessories.map((accessory, index) => (
          <img
            key={index}
            src={accessoryImages[accessory]}
            alt={accessory}
            style={{ width: '80px', height: '80px', cursor: 'pointer', margin: '30px' }}
            onClick={() => handleAccessoryClick(accessory)}
          />
        ))}
      </div>
  
      {/* Remove button */}
      <button
  style={{
    backgroundColor: 'grey',
    color: 'white',
    border: 'none',
    padding: '10px',
    cursor: 'pointer',
  }}
  onClick={handleRemoveAccessories} >
  Remove accessories
</button>
  
      {/* Miffy avatar */}
      <div style={{ display: 'flex', justifyContent: 'center', position: 'relative' }}>
        {/* Background image */}
        <img
          src="./Backdrop.png" 
          alt="Background"
          style={{
            position: 'absolute',
            width: '400px',
            height: '400px',
            zIndex: -1,
            objectFit: 'cover',
          }}
        />
        {/* Miffy avatar */}
        <img src={characterImage} alt="Avatar" style={{ width: '400px', height: '400px' }} />
      </div>
    </div>
  );
  }
  export default CharacterPage;