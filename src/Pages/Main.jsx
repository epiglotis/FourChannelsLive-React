import React, { useEffect, useState, useRef } from 'react';
import { useStateContext } from '../Context/ContextProvider';
import StreamBox from '../Components/StreamBox/StreamBox';
import YouTube from 'react-youtube';

const Main = () => {
  const refHeight = useRef(null);
  const refWidth = useRef(null);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const { activeMenu, setActiveMenu } = useStateContext();
  const { activeScreen, setActiveScreen } = useStateContext();
  const { streamData, setStreamData } = useStateContext();
  const [stream1, setStream1] = useState([]);
  const [stream2, setStream2] = useState([]);
  const [stream3, setStream3] = useState([]);

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

  useEffect(() => {
    if (activeScreen === '1') {
      setStream1(streamData);
    }
    if (activeScreen === '2') {
      setStream2(streamData);
    }
    if (activeScreen === '3') {
      setStream3(streamData);
    }
  }, [streamData]);

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
            streamId={'SqHIO2zhxbA'}
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
            streamId={'-Lrxv1_i3qc'}
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
            streamId={'acwBho1oqcg'}
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
            streamId={'r2ZgRoX2orE'}
          />
        </div>
      </div>
    </div>
  );
};

export default Main;
