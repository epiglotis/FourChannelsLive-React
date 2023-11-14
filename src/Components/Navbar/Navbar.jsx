import React, { useEffect, useState } from 'react';
import ResetScreen from '../ResetScreen/ResetScreen';
import DarkSwitch from '../DarkSwitch/DarkSwitch';

const Navbar = ({ getVideoLink }) => {
  const [videoLink, setVideoLink] = useState('');

  useEffect(() => console.log(videoLink), [videoLink]);

  getVideoLink = getVideoLink = () => {
    return videoLink;
  };

  return (
    <div className='flex w-full justify-between'>
      <ResetScreen />
      <div className='flex gap-10 w-1 justify-center'>
        <input
          className='bg-transparent text-center border border-cyan-600'
          placeholder='Youtube Linki Ekleyin'
          type='url'
          onChange={(e) => setVideoLink(e.target.value)}
        ></input>
        <button>Send</button>
      </div>
      <DarkSwitch />
    </div>
  );
};

export default Navbar;
