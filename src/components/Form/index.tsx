import React, { useContext } from 'react';
import {
  Animated,
  Keyboard,
  Pressable,
  Text,
  TouchableOpacity,
  View
} from 'react-native';


import { AnimationContext } from '../../contexts/AnimationContext';
import { CalcContext } from '../../contexts/CalcContext';
import { HomeStyles } from '../../styles/screens/Home';
import { useThemeAwareObject } from '../../utils/useThemeAwareObject.hook';
import { InputTextInfo } from '../InputTextInfo';
import { InputPicker } from '../InputPicker';
import { InputSlider } from '../InputSlider';
import { FormStyles } from './style';

export function Form() {
  const {
    handleCalc, handleCalcAgain, TexBtn, btnState,
  } = useContext(CalcContext);
  const { fadeAnim } = useContext(AnimationContext);

  const Styles = useThemeAwareObject(FormStyles);
  const StylesHome = useThemeAwareObject(HomeStyles);

  return (
    <Animated.View style={{ opacity: fadeAnim }}>

      <Pressable onPress={Keyboard.dismiss}>
        <InputTextInfo />
        <InputPicker />
        {/*    */}
        <View style={Styles.BtnContainer}>
          <TouchableOpacity
            onPress={
              btnState === true ? () => handleCalc(): () => handleCalcAgain()
            }
            style={StylesHome.Button}
            activeOpacity={0.6}
          >
            <Text style={StylesHome.TextBtn}>{TexBtn}</Text>
          </TouchableOpacity>
        </View>
        <View style={Styles.WarningContainer}>
          <Text style={Styles.WarningText}>
            Preencha os campos acima
          </Text>
          
          
        </View>
      </Pressable>
      
    </Animated.View>
  );
}
