import React from 'react'
import { TouchableOpacity, View, Text, StyleSheet, TouchableNativeFeedback, Platform } from 'react-native';

interface Props {
    title: string;
    position?: 'br' | 'bl';
    onPress: () => void;
}


export const Fab = ({ title, onPress, position = 'br' }: Props) => {
    // para sistema operativo de ios 
    const io = () => {
        return (
            <TouchableOpacity
                onPress={onPress}
                activeOpacity={0.72}
                style={[
                    (position === 'bl')
                        ? style.botonFlotanteLocationLeft
                        : style.botonFlotanteLocationright
                ]}>
                <View style={style.botonFlotante}>
                    <Text style={style.botonFlotantetext}>
                        {title}
                    </Text>
                </View>
            </TouchableOpacity>
        )
    }

    // para sistema operativo de Android 

    const android = () => {
        return (
            <View style={[
                (position === 'bl')
                    ? style.botonFlotanteLocationLeft
                    : style.botonFlotanteLocationright
            ]}>
                <TouchableNativeFeedback onPress={onPress}
                    background={TouchableNativeFeedback.Ripple('#4d5155', false, 32)}
                >
                    <View style={style.botonFlotante}>
                        <Text style={style.botonFlotantetext}>
                            {title}
                        </Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
        )
    }
    return (Platform.OS === 'ios') ? io() : android();
}

const style = StyleSheet.create({
    botonFlotanteLocationright: {
        position: 'absolute',
        bottom: 10,
        right: 10
    },
    botonFlotanteLocationLeft: {
        position: 'absolute',
        bottom: 10,
        left: 10
    },

    botonFlotante: {
        backgroundColor: '#5856D6',
        width: 60,
        height: 60,
        borderRadius: 100,
        justifyContent: 'center'
    },
    botonFlotantetext: {
        color: "#fff",
        fontSize: 25,
        alignSelf: 'center',

    }
})