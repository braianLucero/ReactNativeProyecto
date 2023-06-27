import React from 'react'
import { View, Text } from 'react-native';
import { styles } from '../theme/appThem';
import { BotonCalc } from '../Components/BotonCalc';

export const CalculadoraScreen = () => {
    return (
        <View style={styles.calculadoraContainer}>
            <Text style={styles.resultadoPequenio}>1,500.00 </Text>
            <Text style={styles.resultado}>1,500.00 </Text>

            <View style={styles.fila}>

                <BotonCalc texto='C' color='#9c9a9c' />
                <BotonCalc texto='+/-' color='#9c9a9c' />
                <BotonCalc texto='del' color='#9c9a9c' />
                <BotonCalc texto='/' color='#FF9427' />

            </View>
        </View>
    )
}
