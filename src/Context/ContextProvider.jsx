import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [screenSize, setScreenSize] = useState(undefined);
  const [darkMode, setDarkMode] = useState(false);
  const [selectPlatform, setSelectPlatform] = useState('twitch');
  const [streamData, setStreamData] = useState([]);

  return (
    <StateContext.Provider
      value={{
        activeMenu,
        setActiveMenu,
        screenSize,
        setScreenSize,
        darkMode,
        setDarkMode,
        selectPlatform,
        setSelectPlatform,
        streamData,
        setStreamData,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
