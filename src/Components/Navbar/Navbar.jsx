import React, { useEffect, useState } from 'react';
import ResetScreen from '../ResetScreen/ResetScreen';
import DarkSwitch from '../DarkSwitch/DarkSwitch';

const Navbar = ({ getVideoLink }) => {
  const [videoLink, setVideoLink] = useState('');

  const sendVideoLinkToParent = () =>{
    getVideoLink(videoLink)
    console.log(videoLink)
  }

  

  return (
    <div className='flex w-full justify-between'>
      <ResetScreen />
      <div className='flex gap-5 w-1 justify-center'>
        <input
          className='bg-transparent text-center border border-cyan-600 flex-1'
          placeholder='Youtube Linki Ekleyin'
          type='url'
          onChange={(e) => setVideoLink(e.target.value)}
        ></input>
        <button className='border border-cyan-600' onClick={sendVideoLinkToParent}>
          <p className='m-2'>Ekle</p>
        </button>
      </div>
      <DarkSwitch />
    </div>
  );
};

export default Navbar;
