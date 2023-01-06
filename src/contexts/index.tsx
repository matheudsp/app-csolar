import React from 'react';

import { StatusBar } from 'expo-status-bar';

import dark from '../styles/themes/dark';
import light from '../styles/themes/light';
import { AnimationContextProvider } from './AnimationContext';
import { CalcContextProvider } from './CalcContext';
import { ThemeContextProvider } from './ThemeContext';



interface Props {
  children: React.ReactNode;
}

export default function ContextProvider({ children }: Props) {
  return (
    <ThemeContextProvider currentTheme={light}>
      <StatusBar hidden={true}/>
      <AnimationContextProvider>
        <CalcContextProvider>{children}</CalcContextProvider>
      </AnimationContextProvider>
    </ThemeContextProvider>
  );
}
