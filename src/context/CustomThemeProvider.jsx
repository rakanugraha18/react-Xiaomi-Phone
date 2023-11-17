import React from 'react';
import { DynamicThemeProvider } from './DynamicThemeContext';

const CustomThemeProvider = ({ children }) => {
  return <DynamicThemeProvider>{children}</DynamicThemeProvider>;
};

export default CustomThemeProvider;