import React from 'react'
import { SafeAreaView, StatusBar } from 'react-native';
import { StackNavigation } from '../LoAprendido/src/Navegaciones/StackNavigation'

export const App = () => {
  return (
    <SafeAreaView>
      <StatusBar
        backgroundColor={'black'}
        barStyle='light-content'
      />
      <StackNavigation />
    </SafeAreaView>


  )
}
