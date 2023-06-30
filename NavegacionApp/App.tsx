import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import { StackNavigator } from './src/Navigator/StackNavigator';
import { MenuLateralBasico } from './src/Navigator/MenuLateralBasico';

const App = () => {
  return (
    <NavigationContainer>

      {/* <StackNavigator /> */}
      <MenuLateralBasico />

    </NavigationContainer>
  )
}

export default App;