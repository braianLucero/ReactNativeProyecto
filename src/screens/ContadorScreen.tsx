import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { Fab } from '../components/Fab';
export const ContadorScreen = () => {
    const [boton, setBoton] = useState(0);



    return (
        <View style={style.contenedor}>
            <Text style={style.titulo}>
                Contador:{boton}
            </Text>

            <Fab
                title="+1"
                position='br'
                onPress={() => setBoton(boton - 1)}
            />

            <Fab
                title="-1"
                position='bl'
                onPress={() => setBoton(boton + 1)}
            />

        </View >
    )
}

const style = StyleSheet.create({
    contenedor: {
        flex: 1,
        justifyContent: 'center',
    },
    titulo: {
        textAlign: 'center',
        fontSize: 40,
        color: '#000'
    },


})
