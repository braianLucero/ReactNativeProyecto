import React from 'react';
import { Text, View, TextInput, Image } from 'react-native';
import { styles } from '../Theme/Login';
export const LoginScreen = () => {
    return (
        <View style={styles.Container}>
            <Image
                style={styles.img}
                source={{
                    uri: "https://images7.alphacoders.com/114/1145499.jpg"
                }}
            />
            <Text style={styles.text}>Hello</Text>
            <Text style={styles.subTitle}>Sign In to your account</Text>
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

