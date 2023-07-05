import React from 'react';
import { Text, View, TextInput, Image, TouchableOpacity } from 'react-native';
import { styles } from '../Theme/Login';
import LinearGradient from 'react-native-linear-gradient';
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
                <TouchableOpacity>
                    <LinearGradient
                        colors={['#4c669f', '#3b5998', '#192f6a']}
                        style={styles.touchContainer}
                    >
                        <Text style={styles.buttonText}>SIGN IN</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>

        </View>

    )
}