import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import { MenuLateralBasico } from './src/Navigator/MenuLateralBasico';
import { MenuLateral } from './src/Navigator/MenuLateral';
// import { StackNavigator } from './src/Navigator/StackNavigator';


// resetear la cache (npx react-native start --reset-cache) 
const App = () => {
  return (
    <NavigationContainer>
      {/* <StackNavigator /> */}
      {/* <MenuLateralBasico /> */}
      <MenuLateral />
    </NavigationContainer>
  )
}

export default App