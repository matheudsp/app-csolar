import { StyleSheet } from 'react-native';

import { DefaultTheme } from '../themes/styled';

export const HomeStyles = (theme: DefaultTheme) => {
  const styles = StyleSheet.create({
    Area: {
      flex: 1,
      backgroundColor: theme.colors.background,
      justifyContent: 'center',
      alignItems: 'center',
    },
    Title: {
      height: 130,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    Text: {
      color: theme.colors.primary,
      fontSize: 30,
      fontWeight: 'bold',
    },
    Main: {
      flex: 1,
      width: '100%',

      backgroundColor: theme.colors.scndBackground,

      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      padding: 30,
    },
    Button: {
      backgroundColor: theme.colors.primary,

      width: '70%',
      height: 45,
      borderRadius: 15,

      alignItems: 'center',
      justifyContent: 'center',
    },
    TextBtn: {
      color: theme.colors.white,
      fontWeight: 'bold',
      fontSize: 14,
    },
    toggleTheme: {
      backgroundColor: theme.colors.listBackground,
      width: 40,
      height: 40,
      borderRadius: 20,

      position: 'absolute',
      top: 10,
      right: 10,

      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  return styles;
};
