'use client';

import React, { useState } from 'react';
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

const CharacterPage = () => {
  const [characterImage, setCharacterImage] = useState('Miffy.png');
  const [selectedAccessoryIndex, setSelectedAccessoryIndex] = useState(null);
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
    if (selectedAccessoryIndex !== null) {
      const selectedAccessory = accessories[selectedAccessoryIndex];
      const imageWithAccessory =
        wearingAccessoryIndex[
          `miffyWearing${selectedAccessory.charAt(0).toUpperCase() + selectedAccessory.slice(1)}`
        ];
      setCharacterImage(imageWithAccessory || 'Miffy.png');
    }
  };

  const handleRemoveAccessory = () => {
    setCharacterImage('Miffy.png');
    setSelectedAccessoryIndex(null);
  };
  
  return (
    <div style={{ backgroundColor: '#FDFFB6', padding: '2rem' }}>
      <h2 style={{ textAlign: 'center', margin: '5px', fontSize: '2rem' }}>
        Choose an accessory for Miffy
      </h2>

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        {/* Navigation Arrows */}
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
          <button
            onClick={handlePrevAccessory}
            style={{
              background: 'none',
              border: 'none',
              fontSize: '2rem',
              cursor: 'pointer',
              marginRight: '20px',
            }}
          >
            &lt;
          </button>

          {/* Spacing */}
          <div style={{ width: '100px' }}></div>

          {/* Box for Accessories */}
          <div
            style={{
              border: '2px solid black',
              borderRadius: '8px',
              padding: '20px',
              position: 'relative',
              width: 'fit-content', // Adjust this width as needed
            }}
          >
            {/* Accessory Display */}
            {selectedAccessoryIndex !== null && (
              <img
                src={`./${accessoryImages[accessories[selectedAccessoryIndex]]}`}
                alt='Accessory'
                style={{ width: '100px', height: '100px', margin: '5px' }}
              />
            )}
            {/* Apply and Remove buttons */}
            {selectedAccessoryIndex !== null && (
              <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                <button onClick={handleApplyAccessory} style={{ margin: '5px' }}>
                  Apply
                </button>
                <button onClick={handleRemoveAccessory} style={{ margin: '5px' }}>
                  Remove
                </button>
              </div>
            )}
          </div>

          {/* Spacing */}
          <div style={{ width: '100px' }}></div>

          <button
            onClick={handleNextAccessory}
            style={{
              background: 'none',
              border: 'none',
              fontSize: '2rem',
              cursor: 'pointer',
              marginLeft: '20px',
            }}
          >
            &gt;
          </button>
        </div>

        {/* Miffy Avatar */}
        <div style={{ display: 'flex', justifyContent: 'center', position: 'relative' }}>
          {/* Background image */}
          <img src='./Backdrop.png' alt='Background' style={{ position: 'absolute', width: '400px', height: '400px', zIndex: -1, objectFit: 'cover' }} />
          {/* Miffy avatar */}
          <img src={`./${characterImage}`} alt='Avatar' style={{ width: '400px', height: '400px' }} />
        </div>
      </div>
    </div>
  );
};

export default CharacterPage;