import React from 'react';
import { Text, View, TextInput, Image, TouchableOpacity } from 'react-native';
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
                placeholder='Email'
                style={styles.textInput}
                keyboardType="email-address"

            />

            <TextInput
                placeholder='password'
                style={styles.textInput}
                secureTextEntry={true}
            />
            <View>
                <Text style={styles.ForgPassword}>Forgot you password?</Text>
            </View>

            <View style={{ alignItems: 'center' }}>
                <TouchableOpacity style={styles.touchContainer}>
                    <Text style={styles.btnTxt}>SIGN IN</Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.accout}>Dont have an account?</Text>

        </View>

    )
}

