import React, { createContext, useContext, useReducer } from "react";

export const StateContext = createContext();

export const StateContextProvider = ({ reducer, IntialState, children }) => {
  const [stateContext, dispatch] = useReducer(reducer, IntialState);
  const valueObj = [stateContext, dispatch];
  return (
    <StateContext.Provider value={valueObj}>{children}</StateContext.Provider>
  );
};

export const useStateContext = () => {
  const StateContextObj = useContext(StateContext);
  if (!StateContextObj) {
    throw new Error("useStateContext is not in StateContextProvider");
  }
  return StateContextObj;
};
