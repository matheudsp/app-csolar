import { format } from 'date-fns/esm';
import ptBR from 'date-fns/esm/locale/pt-BR/index.js';

import React, {
  createContext, useCallback, useContext, useMemo, useRef, useState,
} from 'react';
import {
  Alert, Keyboard, Share, Vibration,
} from 'react-native';



import { AnimationContext } from './AnimationContext';

interface CalcContextData {
  handleCalc: () => void;
  handleCalcAgain: () => void;
  setPot: (value: number) => void;
  setQtdP: (value: number) => void;
  setRad: (value: number) => void;
  
  onShare: () => void;
  pot: number;
  qtdP: number;
  rad: number;
  CalcDia: number;
  Calc: number;
  TexBtn: string;
  btnState: boolean;
  CalcList: any[];
  
}
interface Props {
  children: React.ReactNode;
}

const CalcContext = createContext<CalcContextData>({} as CalcContextData);

function CalcContextProvider({ children }: Props) {
  const { fadeIn, fadeOut } = useContext(AnimationContext);
  const [pot, setPot] = useState<number>(0);
  const [qtdP, setQtdP] = useState<number>(0);
  const [rad, setRad] = useState<number>(0);

  const [TexBtn, setTexBtn] = useState<string>('Calcular');
  const [btnState, setBtnState] = useState<boolean>(true);
  const [Calc, setCalc] = useState<number>(0);
  const [CalcDia, setCalcDia] = useState<number>(0);
  const [CalcList, setCalcList] = useState<any[]>([]);
  const [CalcId, setCalcId] = useState<number>(0);


  const handleId = useCallback(() => {
    setCalcId((prevState) => prevState + 1);
  }, [CalcId]);

  const handleCalc = useCallback(() => {
    if (pot >= 1 && qtdP >= 1) {
      fadeOut();
      handleId();
      const CalcDia = Number(( rad * (pot/1000) * qtdP).toFixed(2));
      const totalCalc = Number((( rad * (pot/1000) * qtdP)* 30).toFixed(2));
      setCalcList((arr) => [
        ...arr,
        {
          date: format(new Date(), 'EEEEEE, d MMM', { locale: ptBR }),
          id: CalcId, //id: CalcId.toString()
          Calc: totalCalc,
          CalcDia: CalcDia,
        },
      ]);
      setTimeout(() => {
        fadeIn();
        setCalc(totalCalc);
        setCalcDia(CalcDia);
        setBtnState(false);
        setTexBtn('Calcular novamente');
      }, 250);

      Keyboard.dismiss();
    } else if (pot === 0 && qtdP === 0 && rad === 0) {

      Alert.alert('Insira os dados nos campos 😅');
      Vibration.vibrate();
    } else {
      Alert.alert(
        'Não é permitido valor zero. Preencha corretamente❗',
      );
    }
  }, [pot, qtdP, rad, Calc, btnState, TexBtn, CalcList]);

  const handleCalcAgain = useCallback(() => {
    fadeOut();
    setTimeout(() => {
      fadeIn();
      setBtnState(true);
      setTexBtn('Calcular');
      setPot(0);
      setQtdP(0);
      setCalc(0);
      setRad(0);
    }, 250);
  }, [pot, qtdP, rad, Calc, btnState, TexBtn]);

  const onShare = useCallback(async () => {
    await Share.share({
      message: `Fiz a projeção energética do meu sistema pela Calculadora Solar®. 
          _Meu sistema produz:_
            -${CalcDia} kWh p/ dia
            -${Calc} kWh p/ mês`,
    });
  }, [Calc]);

  
  const memoizedValue = useMemo(() => {
    const value: CalcContextData = {
      handleCalc,
      handleCalcAgain,
      onShare,
      setPot,
      setQtdP,
      setRad,
     
      pot,
      CalcDia,
      qtdP,
      rad,
      Calc,
      TexBtn,
      btnState,
      CalcList,
    };
    return value;
  }, [
    handleCalc,
    handleCalcAgain,
    onShare,
    setPot,
    setQtdP,
    setRad,
    pot,
    qtdP,
    rad,
    Calc,
    CalcDia,
    TexBtn,
    btnState,
    CalcList,
  ]);

  return (
    <CalcContext.Provider value={memoizedValue}>{children}</CalcContext.Provider>
  );
}

export { CalcContext, CalcContextProvider };
