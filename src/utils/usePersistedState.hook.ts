/* eslint-disable no-else-return */
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  useState, useEffect, Dispatch, SetStateAction,
} from 'react';

type Response<T> = [
  T,
  Dispatch<SetStateAction<T>>
];

export function usePersistedState<T>(key: string, initialState: T): Response<T> {
  const [state, setState] = useState(async () => {
    const storageValue = await AsyncStorage.getItem(key);

    if (storageValue) {
      return JSON.parse(storageValue);
    } else {
      return initialState;
    }
  });

  useEffect(() => {
    (async() => {
      await AsyncStorage.setItem(key, JSON.stringify(state));
    })();
  }, [state]);

  return [state, setState];
}
