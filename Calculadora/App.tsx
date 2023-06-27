import React from 'react'
import { CalculadoraScreen } from './src/Screen/CalculadoraScreen';
import { SafeAreaView, StatusBar, Text, View } from 'react-native';
import { styles } from './src/theme/appThem';

const App = () => {
  return (
    <SafeAreaView style={styles.fondo}>
      <StatusBar                           // es para darles estilos a la parte donde muestra lo que es el wifi la hora , bateria ,etc.
        backgroundColor='black'
        barStyle='light-content'
      />
      <CalculadoraScreen />
    </SafeAreaView>
  )
}

export default App