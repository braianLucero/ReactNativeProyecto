import React from 'react'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigation } from '../LoAprendido/src/Navegaciones/StackNavigation'

export const App = () => {
  return (
    <NavigationContainer>

      <StackNavigation />

    </NavigationContainer >


  )
}
