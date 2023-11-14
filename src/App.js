import './App.css';
import { useStateContext } from './Context/ContextProvider';
import Navbar from './Components/Navbar/Navbar';
import Main from './Pages/Main';
import { useEffect, useState } from 'react';

function App() {
  const { activeMenu, setActiveMenu } = useStateContext();
  const { activeScreen, setActiveScreen } = useStateContext();
  const [videoLink, setVideoLink] = useState();

  useEffect(() => {
    if (videoLink !== undefined) {
      console.log(videoLink);
    }
  }, [videoLink]);

  const getVideoLink = (inputVideoLink) => {
    console.log(inputVideoLink);
    setVideoLink(inputVideoLink);
  };

  return (
    <>
      <div
        key='top'
        className='dark:bg-[#121212] dark:text-white bg-slate-100 text-black'
      >
        <div className='flex'>
          <div className='flex w-full h-screen'>
            <div
              key='main'
              className={`flex flex-col w-full content-center items-center bg-slate-100 dark:bg-[#1b1b1b] 'flex'`}
            >
              {activeMenu ? (
                <div
                  key='navbor'
                  className='flex md:static p-1 w-full h-20 justify-between items-center fixed navbar dark:bg-[#1b1b1b] dark:text-white'
                >
                  <Navbar getVideoLink={getVideoLink} />
                </div>
              ) : (
                <></>
              )}
              <div
                key='hero'
                className='flex-1 w-full h-full dark:bg-[#121212]'
              >
                <Main newVideoLink={videoLink ? videoLink : ''} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
