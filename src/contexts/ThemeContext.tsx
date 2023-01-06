/* eslint-disable no-nested-ternary */
import React, {
  createContext, useCallback, useMemo, useState,useEffect
} from 'react';


import dark from '../styles/themes/dark';
import light from '../styles/themes/light';
import { DefaultTheme } from '../styles/themes/styled';



interface ThemeContextData {
  theme: DefaultTheme;
  toggleTheme: () => void;
}

interface Props {
  currentTheme: DefaultTheme;
  children: React.ReactNode;
}

const ThemeContext = createContext<ThemeContextData>({
  theme: dark,
  toggleTheme: () => {
    console.log("ThemeProvider isn't rendered 😞");
  },
});




function ThemeContextProvider({ children, currentTheme }: Props) {
  const [theme, setTheme] = useState(light);

  




  const toggleTheme = useCallback(() => {
    setTheme(({ title }) => (
      title === light.title
        ? dark
        : title === dark.title
          ? light
          : currentTheme));
  }, []);


  const memoizedValue = useMemo(() => {
    const value: ThemeContextData = {
      theme,
      toggleTheme,
    };
    return value;
  }, [theme, toggleTheme]);



  return (
    <ThemeContext.Provider value={memoizedValue}>
      {children}
    </ThemeContext.Provider>
  );
}

export { ThemeContext, ThemeContextProvider };
