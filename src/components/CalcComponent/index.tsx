import { AntDesign } from '@expo/vector-icons';
import React, { useContext } from 'react';
import {
  Animated, Text, TouchableOpacity, View,
} from 'react-native';

import { AnimationContext } from '../../contexts/AnimationContext';
import { CalcContext } from '../../contexts/CalcContext';
import { HomeStyles } from '../../styles/screens/Home';
import { useThemeAwareObject } from '../../utils/useThemeAwareObject.hook';
import { CalcFlatList } from '../CalcFlatList';
import { CalcStyles } from './style';

export function CalcComponent() {
  const {
    handleCalc, Calc, CalcDia, handleCalcAgain, TexBtn, btnState, onShare, CalcList,
  } = useContext(CalcContext);

  const { fadeAnim } = useContext(AnimationContext);

  const Styles = useThemeAwareObject(CalcStyles);
  const StylesHome = useThemeAwareObject(HomeStyles);

  return (
    <Animated.View style={[Styles.CalcContainer, { opacity: fadeAnim }]}>
      <View style={Styles.ResultCalcContainer}>
        <View>
          <Text style={Styles.TextCalc}>Energia Diária</Text>
          <Text style={Styles.TextCalcResult}>
            {CalcDia} <Text style={Styles.TextMeasure}>kWh</Text>
          </Text>
          <Text style={Styles.TextCalc}>Energia Mensal</Text>
          <Text style={Styles.TextCalcResult}>
            {Calc} <Text style={Styles.TextMeasure}>kWh</Text>
          </Text>
        </View>
        
        <TouchableOpacity
          onPress={() => onShare()}
          style={Styles.ShareBtn}
          activeOpacity={0.6}
        >
          <AntDesign name="sharealt" size={26} color="white" />
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={btnState === true ? () => handleCalc() : () => handleCalcAgain()}
        style={StylesHome.Button}
        activeOpacity={0.6}
      >
        <Text style={StylesHome.TextBtn}>{TexBtn}</Text>
      </TouchableOpacity>
      <Text style={Styles.TitleList}>Histórico</Text>
      <CalcFlatList />
    </Animated.View>
  );
}
