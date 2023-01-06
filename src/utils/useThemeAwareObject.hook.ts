import { useContext, useMemo } from 'react';

import { ThemeContext } from '../contexts/ThemeContext';
import { DefaultTheme } from '../styles/themes/styled';

type Generator<T extends {}> = (theme: DefaultTheme) => T;

const useThemeAwareObject = <T extends {}>(fn: Generator<T>) => {
  const { theme } = useContext(ThemeContext);

  const ThemeAwareObject = useMemo(() => fn(theme), [fn, theme]);

  return ThemeAwareObject;
};

export { useThemeAwareObject };
