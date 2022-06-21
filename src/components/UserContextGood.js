import React, { createContext, useState } from "react";

export const UserContext = createContext(null);

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuth, setIsAuth] = useState(false);
  const [isPremiumUser, setIsPremiumUser] = useState(false);

  const value = {
    user,
    setUser,
    isAuth,
    setIsAuth,
    isPremiumUser,
    setIsPremiumUser,
  };

  return (
    <UserContext.Provider value={value}> {children} </UserContext.Provider>
  );
};
