import React, { createContext, useState } from "react";

export const ThemeContext = createContext(null);

export const Themes = {
  Light: "light",
  Dark: "dark",
  Ultraviolet: "ultraviolet",
  Colorful: "colorful",
};

export const ThemeContextProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState(Themes.Light);

  const value = {
    currentTheme,
    setCurrentTheme,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
