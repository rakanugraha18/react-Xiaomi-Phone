import React, { createContext, useContext, useEffect, useState } from "react";

const getSystemTheme = (mediaQuery) => {
  const prefersDarkMode = window.matchMedia(mediaQuery).matches;
  return prefersDarkMode ? "dark" : "light";
};

const DynamicThemeContext = createContext();

export const DynamicThemeProvider = ({ children }) => {
  const prefersDarkModeMediaQuery = "(prefers-color-scheme: dark)";
  const [theme, setTheme] = useState("");

  const setThemeFromMediaQuery = () => {
    const newTheme = getSystemTheme(prefersDarkModeMediaQuery);
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  useEffect(() => {
    const mediaQueryList = window.matchMedia(prefersDarkModeMediaQuery);

    const handleMediaQueryChange = () => {
      setThemeFromMediaQuery();
    };

    setThemeFromMediaQuery();
    mediaQueryList.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQueryList.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  const contextValue = { theme, setTheme };

  return (
    <DynamicThemeContext.Provider value={contextValue}>
      {children}
    </DynamicThemeContext.Provider>
  );
};

export const useDynamicTheme = () => {
  const context = useContext(DynamicThemeContext);
  if (!context) {
    throw new Error(
      "useDynamicTheme must be used within a DynamicThemeProvider"
    );
  }
  return context;
};
