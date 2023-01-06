import React, {
  createContext, useCallback, useMemo, useRef,
} from 'react';
import { Animated } from 'react-native';

interface AnimationContextData {
  fadeIn: () => void;
  fadeOut: () => void;
  fadeAnim: Animated.Value;
}

interface Props {
  children: React.ReactNode;
}

const AnimationContext = createContext<AnimationContextData>({} as AnimationContextData);

function AnimationContextProvider({ children }: Props) {
  const fadeAnim = useRef(new Animated.Value(1)).current;

  const fadeIn = useCallback(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 250,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  const fadeOut = useCallback(() => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 250,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  const memoizedValue = useMemo(() => {
    const value: AnimationContextData = {
      fadeIn,
      fadeOut,
      fadeAnim,
    };
    return value;
  }, [fadeIn, fadeOut, fadeAnim]);

  return (
    <AnimationContext.Provider value={memoizedValue}>
      {children}
    </AnimationContext.Provider>
  );
}

export { AnimationContext, AnimationContextProvider };
