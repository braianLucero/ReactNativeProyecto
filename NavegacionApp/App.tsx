import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { MenuLateralBasico } from './src/Navigator/MenuLateralBasico';
// import { StackNavigator } from './src/Navigator/StackNavigator';

const App = () => {
  return (
    <NavigationContainer>

      {/* <StackNavigator /> */}
      <MenuLateralBasico />

    </NavigationContainer>
  )
}

export default App;