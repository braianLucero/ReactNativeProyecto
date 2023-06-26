import React from 'react'
import { View, Text, StyleSheet, Dimensions, useWindowDimensions } from 'react-native';

// const { width, height } = Dimensions.get('window');
export const DimensionesScreen = () => {
    const { width, height } = useWindowDimensions()
    return (
        <View>
            <View style={styles.cajaPadre}>
                <View style={styles.cajaAzul} />
                <View style={styles.cajaNaranja} />
            </View>
            <Text style={styles.title} >w:{width} , h:{height}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    cajaPadre: {
        width: "100%",
        height: 200,
        backgroundColor: 'red'

    },
    cajaAzul: {
        backgroundColor: '#2049c1',
        width: '50%',
        height: '50%'

    },
    cajaNaranja: {
        backgroundColor: '#ff5700',

    },
    title: {
        fontSize: 30,
        textAlign: 'center'

    }
});

