import React from 'react';
import { SafeAreaView, View, Text } from 'react-native';

import { SimpleLineIcons } from '@expo/vector-icons';
import { CalcFlatList } from '../components/CalcFlatList';
import { CalcHistoryStyles } from '../styles/screens/CalcHistory';
import { useThemeAwareObject } from '../utils/useThemeAwareObject.hook';

export default function CalcHistory() {
  const Styles = useThemeAwareObject(CalcHistoryStyles);

  return (
    <SafeAreaView style={Styles.Wrapper}>
      <View style={Styles.TitleContainer}>
        <Text style={Styles.Title}>Histórico</Text>
      </View>
      <View style={Styles.Main}>
        <View style={Styles.TopBarList}>
          <Text style={Styles.TopBarListText}>ID</Text>
          <Text style={[Styles.TopBarListText, { marginRight: 15 }]}>Data</Text>
          <Text style={Styles.TopBarListText}>Resultado</Text>
        </View>
        <CalcFlatList />
      </View>
    </SafeAreaView>
  );
}
