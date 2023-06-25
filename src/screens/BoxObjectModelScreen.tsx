import React from 'react'
import { Text, View, StyleSheet } from 'react-native';

export const BoxObjectModelScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>BoxObjectModel</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'orange',
        justifyContent: 'center',

    },
    title: {
        padding: 10,
        fontSize: 30,
        borderWidth: 9,
        textAlign: 'center',
        // alignSelf: 'center',
        marginRight: "auto",
        marginLeft: "auto",

    }
});