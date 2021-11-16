import React, { createContext, useState } from 'react';

const UserContext = createContext({
  user: '',
  setUser: () => {},
});

// wrap around app in index.js
export const UserContextProvider = (props) => {
  const [user, setUser] = useState('');

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContext;
