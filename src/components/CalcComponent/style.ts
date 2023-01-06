import { StyleSheet } from 'react-native';

import { DefaultTheme } from '../../styles/themes/styled';

export const CalcStyles = (theme: DefaultTheme) => {
  const Styles = StyleSheet.create({
    CalcContainer: {
      flex: 1,
      width: '100%',
      alignItems: 'center',
    },
    ResultCalcContainer: {
      flexDirection: 'row',
      alignItems: 'center',

      marginBottom: 25,
    },
    TextCalc: {
      color: theme.colors.textColor,
      fontSize: 24,
      textAlign: 'center',
    },
    TextCalcResult: {
      fontWeight: 'bold',
      fontSize: 36,
      textAlign: 'center',
      color: theme.colors.primary,
    },
    TextMeasure:{
      fontSize: 16,
  
    },
    ShareBtn: {
      width: 75,
      height: 50,

      justifyContent: 'center',
      alignItems: 'center',

      borderRadius: 15,
      marginLeft: 20,

      backgroundColor: theme.colors.primary,
    },
    TextShareBtn: {
      color: theme.colors.white,
      fontSize: 16,
    },
    TitleList: {
      color: theme.colors.textColor,
      marginTop: 20,
      fontSize: 22,
    },
  });
  return Styles;
};
