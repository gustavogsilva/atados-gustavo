import React, { createContext, useContext, useState } from 'react';

export const GlobalState = createContext();

export const GlobalStateProvider = ({ initialState, children }) => (
  <GlobalState.Provider value={useState(initialState)}>{children}</GlobalState.Provider>
);

export const useGlobalState = () => useContext(GlobalState);
