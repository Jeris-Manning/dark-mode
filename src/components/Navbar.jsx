import React, { useState } from 'react';
import { useDarkMode } from '../hooks/useDarkMode.js';

const Navbar = () => {
  
  const [blight, setBlight] = useDarkMode([blight, setBlight])
  console.log(setBlight)
  const toggleMode = e => {
    e.preventDefault();
    setBlight(!blight);
  };
  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={blight ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};


export default Navbar;