import { StyleSheet } from 'react-native';

import { DefaultTheme } from '../../styles/themes/styled';

export const CalcListStyles = (theme: DefaultTheme) => {
  const styles = StyleSheet.create({
    ListOfCalcs: {
      marginTop: 20,
      width: '100%',
      borderRadius: 15,
    },
    ListCalcContainer: {
      width: '100%',
      height: 45,

      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around',
      borderRadius: 15,

      marginTop: 5,

      backgroundColor: theme.colors.listBackground,
    },
    ListCalcDate: {
      color: theme.colors.textColor,
      fontSize: 14,
    },
    ListCalcItem: {
      color: theme.colors.primary,
      fontSize: 20,
      fontWeight: 'bold',
      letterSpacing: 0.5,
    },
    btnRemoveContainer: {
    },
    btnRemove: {
      width: 80,
      height: 45,
      backgroundColor: theme.colors.primary,
      marginTop: 5,
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
      right: 20,
      paddingLeft: 15,
    },
    TextMeasure:{
      fontSize:12
    }
  });
  return styles;
};
