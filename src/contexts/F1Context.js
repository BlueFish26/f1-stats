import React, { createContext, useReducer, useContext } from 'react';

export const F1Context = createContext();

export const F1ContextProvider = ({ reducer, initialState, children }) => (
  <F1Context.Provider value={useReducer(reducer, initialState)}>
    {children}
  </F1Context.Provider>
);

export const useF1Context = () => useContext(F1Context);
