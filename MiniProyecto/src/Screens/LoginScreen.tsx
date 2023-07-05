import React from 'react'
import { Text, View, StyleSheet, TextInput } from 'react-native';
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
        fontSize: 30,
        color: '#000',
        fontWeight: 'bold'

    },
    subTitle: {
        fontSize: 20,
        color: 'gray',

    },
    textInput: {
        borderWidth: 1,
        borderColor: 'gray',
        padding: 10,
        width: '80%',
        height: 50,
        marginTop: 20,
        borderRadius: 30,


    }

});