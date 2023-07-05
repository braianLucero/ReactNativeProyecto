import React from 'react'
import { Text, View, StyleSheet, TextInput, StatusBar } from 'react-native';
export const LoginScreen = () => {
    return (
        <View style={styles.Container}>

            <Text style={styles.text}>Hello</Text>
            <Text style={styles.subTitle}>Sig In to your account</Text>
            <TextInput
                placeholder='Brasanluc123@gmail.com'
                style={styles.textInput}
            />

            <TextInput
                placeholder='password'
                style={styles.textInput}

            />
            <StatusBar
                style='auto'
            />
        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#f1f1f1',
        alignSelf: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: 80,
        color: '#000',
        fontWeight: 'bold',
        textAlign: 'center'

    },
    subTitle: {
        fontSize: 20,
        color: 'gray',
        textAlign: 'center'


    },
    textInput: {
        padding: 10,
        paddingStart: 30,
        width: '90%',
        height: 50,
        marginTop: 20,
        borderRadius: 30,
        backgroundColor: '#fff',
        marginHorizontal: 19
    }

});