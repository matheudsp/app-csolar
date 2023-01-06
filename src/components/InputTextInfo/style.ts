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
      fontWeight:'bold',
      marginTop: 15,
      paddingLeft: 10,
      borderRadius: 15,
    },
  });
  return styles;
};
