import React from 'react'
import { View, StyleSheet } from 'react-native';

export const PositionScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.cajaMorada} />
            <View style={styles.cajaNaranja} />
            <View style={styles.cajaVerde} />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        // flex: 1,
        width: 400,
        height: 300,
        backgroundColor: '#28C4D9',
        // justifyContent: 'center',
        // alignItems: 'center'

    },
    cajaMorada: {
        width: 100,
        height: 100,
        backgroundColor: '#a120c1',
        borderWidth: 10,
        borderColor: 'white',
        position: 'absolute',
        top: 0,
        right: 0

    },
    cajaNaranja: {
        width: 100,
        height: 100,
        backgroundColor: '#c15d20',
        borderWidth: 10,
        borderColor: 'white',
        position: 'absolute',
        bottom: 0,
        right: 0
    },
    cajaVerde: {
        backgroundColor: 'green',
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        position: 'absolute',
        bottom: 0,
        left: 0
    }
});