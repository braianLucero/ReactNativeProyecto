import React from 'react';
// import { ContadorScreen } from './src/screens/ContadorScreen';
import { BoxObjectModelScreen } from './src/screens/BoxObjectModelScreen';
import { SafeAreaView } from 'react-native';

// SafeAreaView es mas que nada para ios para que no choque con el noch 
const App = () => {
  return (
    <SafeAreaView style={{ height: 400 }}>
      {/* // <ContadorScreen /> */}
      <BoxObjectModelScreen />

    </SafeAreaView>
  );
};
export default App;