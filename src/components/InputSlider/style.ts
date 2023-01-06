import { StyleSheet } from 'react-native';

import { DefaultTheme } from '../../styles/themes/styled';

export const InputStyles = (theme: DefaultTheme) => {
  const styles = StyleSheet.create({
    Container: {
      width: '100%',

      marginBottom: 30,
    },
    Text: {
      paddingLeft: 10,
      fontSize: 16,
      fontWeight: 'bold',
      color: theme.colors.textColor,
    },
    Input: {
      backgroundColor: theme.colors.inputColor,
      height: 45,
      color: theme.colors.textColor,
      borderWidth:0,
      marginTop: 15,
      paddingLeft: 10,
      borderRadius: 15,
    },
    Slider:{
      width: 225, height: 40, alignSelf:"center"
    }
   
  });
  return styles;
};
