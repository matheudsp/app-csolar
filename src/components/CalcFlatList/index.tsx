import { Feather } from '@expo/vector-icons';
import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { FlatList, RectButton, Swipeable } from 'react-native-gesture-handler';

import { CalcContext } from '../../contexts/CalcContext';
import { ThemeContext } from '../../contexts/ThemeContext';
import { useThemeAwareObject } from '../../utils/useThemeAwareObject.hook';
import { CalcListStyles } from './style';

export function CalcFlatList() {
  const { CalcList } = useContext(CalcContext);
  const { theme } = useContext(ThemeContext);

  const Styles = useThemeAwareObject(CalcListStyles);

  return (
    <>
      <FlatList
        data={CalcList.reverse()}
        style={Styles.ListOfCalcs}
        keyExtractor={(item: any) => item.id}
        renderItem={({ item, index }) => (
          <Swipeable
            overshootRight={false}
            renderRightActions={() => (
              <View style={Styles.btnRemoveContainer}>
                <RectButton style={Styles.btnRemove}>
                  <Feather name="trash" size={16} color={theme.colors.scndBackground} />
                </RectButton>
              </View>
            )}
          >
            <View style={Styles.ListCalcContainer}>
              <Text style={Styles.ListCalcDate}>{index + 1}</Text>
              <Text style={Styles.ListCalcDate}>{item.date}</Text>
              <Text style={Styles.ListCalcItem}>{item.Calc} <Text  style={Styles.TextMeasure}>kWh</Text></Text>
            </View>
          </Swipeable>

        )}
        showsVerticalScrollIndicator={false}
      />
    </>
  );
}
