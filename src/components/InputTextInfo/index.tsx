import React, { useContext } from 'react';
import { Text, TextInput, View } from 'react-native';

import { CalcContext } from '../../contexts/CalcContext';
import { ThemeContext } from '../../contexts/ThemeContext';
import { useThemeAwareObject } from '../../utils/useThemeAwareObject.hook';
import { InputStyles } from './style';

export function InputTextInfo() {
  const {
    setPot, setQtdP, pot, qtdP,
  } = useContext(CalcContext);
  const { theme } = useContext(ThemeContext);

  const Styles = useThemeAwareObject(InputStyles);

  return (
    <>
      <View style={Styles.Container}>
        <Text style={Styles.Text}>Potência</Text>
        <TextInput
          style={Styles.Input}
          placeholder="Ex. 400"
          placeholderTextColor={theme.colors.erasedText}
          keyboardAppearance={theme.title === 'light' ? 'light' : 'dark'}
          keyboardType="numeric"
          onChangeText={setPot}
          value={pot === 0 ? '' : pot.toString().replace(',', '.')}
          maxLength={4}
        />
      </View>
      <View style={Styles.Container}>
        <Text style={Styles.Text}>Quantidade de Placas</Text>
        <TextInput
          style={Styles.Input}
          placeholder="Ex. 22"
          placeholderTextColor={theme.colors.erasedText}
          keyboardAppearance={theme.title === 'light' ? 'light' : 'dark'}
          keyboardType="numeric"
          onChangeText={setQtdP}
          value={qtdP === 0 ? '' : qtdP.toString().replace(',', '.')}
          maxLength={6}
        />
      </View>
    </>
  );
}
