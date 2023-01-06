import React, { useContext, useState } from 'react';
import { Text, View } from 'react-native';
import Slider from '@react-native-community/slider';



import { ThemeContext } from '../../contexts/ThemeContext';
import { useThemeAwareObject } from '../../utils/useThemeAwareObject.hook';
import { InputStyles } from './style';


export function InputSlider() {

  const { theme } = useContext(ThemeContext);

  const Styles = useThemeAwareObject(InputStyles);

  const [qtdD, SetQtdD] = useState(0)
  

  return (
    <>
      <View style={Styles.Container}>
        <Text style={Styles.Text}>{qtdD} dia(s)</Text>
        <Slider
          style={Styles.Slider}
          minimumValue={1}
          maximumValue={31}
          step={1}
          minimumTrackTintColor={theme.colors.primary}
          maximumTrackTintColor={theme.colors.black}
          thumbTintColor={theme.colors.primary}
          
          
          value={qtdD}
          onValueChange={SetQtdD}
          
          
      /> 
      
      </View>
    </>
  );
}
