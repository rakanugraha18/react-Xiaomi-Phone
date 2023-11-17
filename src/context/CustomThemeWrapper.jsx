import React from 'react';
import { DynamicThemeProvider } from './DynamicThemeContext';

const CustomThemeWrapper = ({ children }) => {
  return <DynamicThemeProvider>{children}</DynamicThemeProvider>;
};

export default CustomThemeWrapper;