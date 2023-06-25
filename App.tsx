import React from 'react';
// import { ContadorScreen } from './src/screens/ContadorScreen';
// import { BoxObjectModelScreen } from './src/screens/BoxObjectModelScreen';
import { SafeAreaView } from 'react-native';
import { DimensionesScreen } from './src/screens/DimensionesScreen';

// SafeAreaView es mas que nada para ios para que no choque con el noch 
const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* // <ContadorScreen /> */}
      {/* <BoxObjectModelScreen /> */}
      <DimensionesScreen />

    </SafeAreaView>
  );
};
export default App;