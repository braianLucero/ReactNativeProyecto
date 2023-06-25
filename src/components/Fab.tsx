import React from 'react'
import { TouchableOpacity, View, Text, StyleSheet, TouchableNativeFeedback } from 'react-native';

interface Props {
    title: string;
    position?: 'br' | 'bl';
    onPress: () => void;
}


export const Fab = ({ title, onPress, position = 'br' }: Props) => {
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

        // <TouchableOpacity onPress={() => setBoton(boton - 1)} style={style.botonFlotanteLocationLeft}>

        //         <View style={style.botonFlotante}>
        //             <Text style={style.botonFlotantetext}>
        //                 -1
        //             </Text>
        //         </View>

        //     </TouchableOpacity>
    )
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