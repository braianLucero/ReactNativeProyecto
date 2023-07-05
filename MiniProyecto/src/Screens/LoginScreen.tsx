import React from 'react'
import { Text, View, StyleSheet } from 'react-native';
export const LoginScreen = () => {
    return (
        <View style={styles.Container}>

            <Text style={styles.text}>Login</Text>

        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: '#fff',
        alignSelf: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: 30
    }
});