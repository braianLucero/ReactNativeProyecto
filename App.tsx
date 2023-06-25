import React from 'react';
import { SafeAreaView } from 'react-native';
// import { ContadorScreen } from './src/screens/ContadorScreen';
// import { BoxObjectModelScreen } from './src/screens/BoxObjectModelScreen';
// import { DimensionesScreen } from './src/screens/DimensionesScreen';
import { PositionScreen } from './src/screens/PositionScreen';

// SafeAreaView es mas que nada para ios para que no choque con el noch 
const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* // <ContadorScreen /> */}
      {/* <BoxObjectModelScreen /> */}
      {/* <DimensionesScreen /> */}
      <PositionScreen />

    </SafeAreaView>
  );
};
export default App;