/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */

/* eslint-disable prettier/prettier */

import * as React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import VehicleScreen from './screens/VehicleScreen';
import UtilityScreen from './screens/UtilityScreen';
import AirTravelScreen from './screens/AirTravelScreen';
import Results from './screens/Results';
import TipsScreen from './screens/TipsScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName = "Home" >
        <Stack.Screen name = "Home" component = {HomeScreen} />
        <Stack.Screen name = "Vehicle" component = {VehicleScreen}/>
        <Stack.Screen name = "Utility" component = {UtilityScreen}/>
        <Stack.Screen name = "Air Travel" component = {AirTravelScreen}/>
        <Stack.Screen name = "Results" component = {Results}/>
        <Stack.Screen name = "Tips" component = {TipsScreen}/>
      </Stack.Navigator>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  home: {
    flex: 1,
    backgroundColor: '#F4C724',
    alignItems: 'center',
    justifyContent: 'flex-end',
},
});


