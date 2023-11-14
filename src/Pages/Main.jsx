import React, { useEffect, useState, useRef } from 'react';
import { useStateContext } from '../Context/ContextProvider';
import StreamBox from '../Components/StreamBox/StreamBox';
import YouTube from 'react-youtube';

const Main = ({ newVideoLink }) => {
  const refHeight = useRef(null);
  const refWidth = useRef(null);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const { activeMenu, setActiveMenu } = useStateContext();
  const { activeScreen, setActiveScreen } = useStateContext();
  const { streamData, setStreamData } = useStateContext();
  const [stream1, setStream1] = useState('SqHIO2zhxbA');
  const [stream2, setStream2] = useState('-Lrxv1_i3qc');
  const [stream3, setStream3] = useState('acwBho1oqcg');
  const [stream4, setStream4] = useState('2i8lfP9oqvk');
  const [newVideoId, setNewVideoId] = useState('');

  useEffect(() => {
    console.log(newVideoLink)
    if(!newVideoLink.includes('https://www.youtube.com/watch?v=')) return;
    try {
      const videoId = newVideoId.replace(
        'https://www.youtube.com/watch?v=',
        ''
      );
      setStream1(videoId);
    } catch (error) {
      console.log(error);
    }
  }, newVideoLink);

  const getSize = () => {
    const newWidth = Math.floor(
      refWidth.current.clientWidth - refWidth.current.clientWidth / 100
    );
    setWidth(newWidth);
    const newHeight = Math.floor(
      refHeight.current.clientHeight - refHeight.current.clientHeight / 100
    );
    setHeight(newHeight);
  };
  const handleClick = (screen) => {
    setActiveScreen(() => screen);
  };

  useEffect(() => {
    getSize();
  }, [activeMenu]);

  useEffect(() => {
    const handleWindowResize = () => {
      getSize();
    };
    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  return (
    <div id='top' className='flex flex-col w-full h-full pr-3'>
      <div key='row1' className='flex w-full h-1/2 m-1 flex-nowrap'>
        <div
          ref={refWidth}
          className='flex w-1/2 mr-1 
              bg-[#1b1b1b] border border-[#1b1b1b] 
              hover:border-blue-600 justify-center items-center'
          onClick={() => handleClick('1')}
        >
          <StreamBox
            width={width}
            height={height}
            platform={'youtube'}
            streamId={stream1}
          />

          {/* screen1, {width}, {height}, active {activeScreen} */}
          {/* {streamData[0].user_name} */}
        </div>
        <div
          ref={refWidth}
          className='flex w-1/2 mr-1 
              bg-[#1b1b1b] border border-[#1b1b1b] 
              hover:border-blue-600 justify-center items-center'
          onClick={() => handleClick('2')}
        >
          <StreamBox
            width={width}
            height={height}
            platform={'youtube'}
            streamId={stream2}
          />
        </div>
      </div>
      <div
        ref={refHeight}
        key='row2'
        className='flex w-full h-1/2 mr-1 ml-1 flex-nowrap'
      >
        <div
          ref={refWidth}
          className='flex w-1/2 mr-1 
              bg-[#1b1b1b] border border-[#1b1b1b] 
              hover:border-blue-600 justify-center items-center'
          onClick={() => handleClick('3')}
        >
          <StreamBox
            width={width}
            height={height}
            platform={'youtube'}
            streamId={stream3}
          />
        </div>
        <div
          ref={refWidth}
          className='flex w-1/2 mr-1 
              bg-[#1b1b1b] border border-[#1b1b1b] 
              hover:border-blue-600 justify-center items-center'
          onClick={() => handleClick('4')}
        >
          <StreamBox
            width={width}
            height={height}
            platform={'youtube'}
            streamId={stream4}
          />
        </div>
      </div>
    </div>
  );
};

export default Main;
