import React, { useReducer, createContext } from 'react';

export default ({ reducer, actions, initialState }) => {
  const Context = createContext();

  const Provider = ({ children }) => {
    const [store, dispatch] = useReducer(reducer, initialState);
    const boundActions = {};

    for (let key in actions) {
      boundActions[key] = actions[key](dispatch);
    }

    return (
      <Context.Provider value={{ store, actions: boundActions }}>
        {children}
      </Context.Provider>
    );
  };

  return { Context, Provider };
}
