import React from 'react'
import { View, Text } from 'react-native';
import { styles } from '../theme/appThem';

export const CalculadoraScreen = () => {
    return (
        <View style={styles.calculadoraContainer}>
            <Text style={styles.resultadoPequenio}>1,500.00 </Text>
            <Text style={styles.resultado}>1,500.00 </Text>

            <View>

                <View style={styles.boton} >
                    <Text style={styles.botonTexto}>1</Text>
                </View>

            </View>


        </View>
    )
}
