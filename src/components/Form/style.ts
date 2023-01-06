import { StyleSheet } from 'react-native';

import { DefaultTheme } from '../../styles/themes/styled';

export const FormStyles = (theme: DefaultTheme) => {
  const Styles = StyleSheet.create({
    BtnContainer: {
      alignItems: 'center',
    },
    WarningContainer: {
      alignItems: 'center',
    },
    WarningText: {
      marginTop: 40,
      fontSize: 14,
      color: theme.colors.primary,
      fontWeight:'bold',
      textTransform: 'uppercase',
    },
  });
  return Styles;
};
