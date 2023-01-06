import { FontAwesome5, Entypo, Feather } from '@expo/vector-icons';
import React, { useContext } from 'react';
import {
  SafeAreaView, Text, TouchableOpacity, View
} from 'react-native';

import { Form } from '../components/Form';
import { CalcComponent } from '../components/CalcComponent';
import { CalcContext } from '../contexts/CalcContext';
import { ThemeContext } from '../contexts/ThemeContext';
import { HomeStyles } from '../styles/screens/Home';
import { useThemeAwareObject } from '../utils/useThemeAwareObject.hook';


export default function Home() {
  const { Calc } = useContext(CalcContext);
  const { theme, toggleTheme } = useContext(ThemeContext);

  const Styles = useThemeAwareObject(HomeStyles);

  return (
    <SafeAreaView style={Styles.Area}>
      <View style={Styles.Title}>
        
        <Text style={Styles.Text}>
          Calculadora Solar
          {' '}
          <FontAwesome5 name="sun" size={24} color={theme.colors.primary} />
        </Text>
        
      </View>
      <View style={Styles.Main}>
        <TouchableOpacity onPress={toggleTheme} style={Styles.toggleTheme} activeOpacity={0.6}>
          {theme.title === 'dark' ? <Entypo name="light-up" size={24} color="white" /> : <Feather name="moon" size={24} color="black" />}
        </TouchableOpacity>
        {Calc === 0 ? <Form /> : <CalcComponent />}
      </View>
    </SafeAreaView>
  );
}
