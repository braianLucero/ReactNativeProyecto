import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import { MenuLateralBasico } from './src/Navigator/MenuLateralBasico';
import { MenuLateral } from './src/Navigator/MenuLateral';
// import { StackNavigator } from './src/Navigator/StackNavigator';
import { Tabs } from './src/Navigator/Tabs';


// resetear la cache (npx react-native start --reset-cache) 
const App = () => {
  return (
    <NavigationContainer>
      {/* <StackNavigator /> */}
      {/* <MenuLateralBasico /> */}
      <MenuLateral />
      {/* <Tabs /> */}
    </NavigationContainer>
  )
}

export default App