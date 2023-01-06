import { MaterialIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { useContext } from 'react';

import { ThemeContext } from '../contexts/ThemeContext';
import Home from '../screens/Home';
import CalcHistory from '../screens/CalcHistory';

interface tabBarIconProps {
  size: number;
  color: string;
}

const AppTab = createBottomTabNavigator();

function AuthRoutes() {
  const { theme } = useContext(ThemeContext);

  return (
    <AppTab.Navigator
      tabBarOptions={{
        activeTintColor: theme.colors.primary,
        inactiveTintColor: theme.colors.erasedText,
        inactiveBackgroundColor: theme.colors.scndBackground,
        activeBackgroundColor: theme.colors.background,
        labelPosition: 'beside-icon',
        style: {
          height: 65,
          borderTopWidth: 1,
          borderTopColor: theme.colors.background,
        },
      }}
    >
      <AppTab.Screen
        name="Calculadora"
        component={Home}
        options={{
          tabBarIcon: (({ size, color }: tabBarIconProps) => (
            <MaterialIcons name="calculate" size={size} color={color} />
          )),
        }}
      />
      <AppTab.Screen
        name="Histórico"
        component={CalcHistory}
        options={{
          tabBarIcon: (({ size, color }: tabBarIconProps) => (
            <MaterialIcons name="history" size={size} color={color} />
          )),
        }}
      />
    </AppTab.Navigator>
  );
}
export default AuthRoutes;
