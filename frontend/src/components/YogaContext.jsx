import React, { createContext, useContext, useReducer } from 'react';

// Define the initial state
const initialState = {
  className: '',
  price: '',
  details: '',
  id: null,
};

// Define the actions
const SET_YOGA_DATA = 'SET_YOGA_DATA';

// add selected yogaClass
const SET_SELECTED_YOGA_CLASS = 'SET_SELECTED_YOGA_CLASS'; // changed code

// Define the reducer
const yogaReducer = (state, action) => {
  switch (action.type) {
    case SET_YOGA_DATA:
      return {
        ...state,
        className: action.payload.className,
        price: action.payload.price,
        details: action.payload.details,
        id: action.payload.id
      };
    default:
      return state;
  }
};

// Create the context
const YogaContext = createContext();

// Create the provider
export const YogaProvider = ({ children }) => {
  const [state, dispatch] = useReducer(yogaReducer, initialState);

  const setYogaData = (data) => {
    dispatch({ type: SET_YOGA_DATA, payload: data });
  };

  // add new logic
  const setSelectedYogaClass = (yogaClass) => { // changed code
    dispatch({ type: SET_SELECTED_YOGA_CLASS, payload: yogaClass });
  };

  return (
    <YogaContext.Provider value={{ state, setYogaData, setSelectedYogaClass }}> 
      {children}
    </YogaContext.Provider>
  );
};

// Create a custom hook for using the context
export const useYogaContext = () => {
  const context = useContext(YogaContext);
  if (!context) {
    throw new Error('useYogaContext must be used within a YogaProvider');
  }
  return context;
};
