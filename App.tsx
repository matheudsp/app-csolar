import { NavigationContainer } from '@react-navigation/native';
import React from 'react';


import ContextProvider from './src/contexts';
import Routes from './src/routes';

export default function App() {
  return (
    <NavigationContainer>

      <ContextProvider>
        <Routes />
      </ContextProvider>
    </NavigationContainer>
  );
}
