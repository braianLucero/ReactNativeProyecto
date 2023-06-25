import React from 'react'
import { View, StyleSheet } from 'react-native';

export const PositionScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.cajaMorada} />
            <View style={styles.cajaNaranja} />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#28C4D9',
        justifyContent: 'center',
        alignItems: 'center'

    },
    cajaMorada: {
        width: 100,
        height: 100,
        backgroundColor: '#a120c1',
        borderWidth: 10,
        borderColor: 'white',

    },
    cajaNaranja: {
        width: 100,
        height: 100,
        backgroundColor: '#c15d20',
        borderWidth: 10,
        borderColor: 'white',

    }
});