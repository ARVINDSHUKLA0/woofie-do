'use client'

// AppContext.js
import React, { createContext, useEffect, useState } from 'react';
import characterData from '@/Data/NavbarArrya.json';

export const ListContext = createContext();

export const ListProvider = ({ children }) => {
  const [characterList, setCharacterList] = useState([]);

  useEffect(() => {
    setCharacterList(characterData);
  }, []);

  return (
    <ListContext.Provider value={{ characterList }}>
      {children}
    </ListContext.Provider>
  );
};
