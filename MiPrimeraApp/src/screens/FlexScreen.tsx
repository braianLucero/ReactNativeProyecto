import React from 'react'
import { View, Text, StyleSheet } from 'react-native';

export const FlexScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.caja1}>caja 1 </Text>
            <Text style={styles.caja2}>caja 2 </Text>
            <Text style={styles.caja3}>caja 3 </Text>
            <Text style={styles.caja1}>caja 1 </Text>
            <Text style={styles.caja2}>caja 2 </Text>
            <Text style={styles.caja3}>caja 3 </Text>
            <Text style={styles.caja1}>caja 1 </Text>
            <Text style={styles.caja2}>caja 2 </Text>
            <Text style={styles.caja3}>caja 3 </Text>
            <Text style={styles.caja1}>caja 1 </Text>
            <Text style={styles.caja2}>caja 2 </Text>
            <Text style={styles.caja3}>caja 3 </Text>
            <Text style={styles.caja1}>caja 1 </Text>
            <Text style={styles.caja2}>caja 2 </Text>
            <Text style={styles.caja3}>caja 3 </Text>
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
        alignItems: 'center',
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'center',

    },

    caja1: {
        width: 70,
        height: 40,
        borderWidth: 2,
        borderColor: 'white',
        fontSize: 20,
        // alignSelf: 'center'

    },
    caja2: {
        width: 70,
        height: 40,
        borderWidth: 2,
        borderColor: 'white',
        fontSize: 20
    },
    caja3: {
        width: 70,
        height: 40,
        borderWidth: 2,
        borderColor: 'white',
        fontSize: 20,
        // alignSelf: 'flex-end'
    }
});