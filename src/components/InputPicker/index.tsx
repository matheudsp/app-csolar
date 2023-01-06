import React, { useContext, useState } from 'react';
import { Text, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

import { CalcContext } from '../../contexts/CalcContext';
import { ThemeContext } from '../../contexts/ThemeContext';
import { useThemeAwareObject } from '../../utils/useThemeAwareObject.hook';
import { InputStyles } from './style';

export function InputPicker() {
  const {
    setRad, rad
  } = useContext(CalcContext);
  const { theme } = useContext(ThemeContext);

  const Styles = useThemeAwareObject(InputStyles);

  const [open, setOpen] = useState(false);
  const [items, setItems] = useState([
    {label: 'Norte', value: '3.52'},
    {label: 'Nordeste ', value: '4.34'},
    {label: 'Sul', value: '3.255'},
    {label: 'Sudeste', value: '3.50'},
    {label: 'Centro-Oeste', value: '4.06'},
  ]);

  return (
    <>
      <View style={Styles.Container}>
        <Text style={Styles.Text}>Radiação</Text>
       
          <DropDownPicker
            open={open}
            value={rad}
            items={items}
            setOpen={setOpen}
            setValue={setRad}
            setItems={setItems}
            listMode="FLATLIST"
            bottomOffset={0}

            style={Styles.Input}
            
            dropDownContainerStyle={Styles.Dropdown}
            
            textStyle={Styles.Text}

            translation={{
              PLACEHOLDER: "Selecione a região"
            }}
            placeholderStyle={{
              color:(theme.colors.erasedText),
          }}/>   
      </View>
    </>
  );
}
