import 'react-native-gesture-handler';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
// import { StackNavigation } from '../LoAprendido/src/Navegaciones/StackNavigation'
import { DrawerNavigation } from './src/Navegaciones/DrawerNavigation';

export const App = () => {
  return (
    <NavigationContainer>

      {/* <StackNavigation /> */}
      <DrawerNavigation />
    </NavigationContainer >


  )
}
