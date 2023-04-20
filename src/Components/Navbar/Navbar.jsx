import React from 'react';
import ResetScreen from '../ResetScreen/ResetScreen';
import DarkSwitch from '../DarkSwitch/DarkSwitch';

const Navbar = () => {
  return (
    <div className='flex w-full justify-between'>
      <ResetScreen />
      <text>Canlı Yayın Takip</text>
      <DarkSwitch />
    </div>
  );
};

export default Navbar;
