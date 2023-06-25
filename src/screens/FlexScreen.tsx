import React from 'react'
import { View, Text, StyleSheet } from 'react-native';

export const FlexScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.caja1}>caja 1 </Text>
            <Text style={styles.caja2}>caja 2 </Text>
            <Text style={styles.caja3}>caja 3 </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#28C4D9',
        flexDirection: 'row'

    },

    caja1: {
        width: 100,
        height: 100,
        borderWidth: 2,
        borderColor: 'white',
        fontSize: 30
    },
    caja2: {
        width: 100,
        height: 100,
        borderWidth: 2,
        borderColor: 'white',
        fontSize: 30
    },
    caja3: {
        width: 100,
        height: 100,
        borderWidth: 2,
        borderColor: 'white',
        fontSize: 30
    }
});