import React from 'react';
import { View, Image, StyleSheet, ScrollView } from 'react-native';

export const PaginaInterior = () => {
    return (
        // ScrollView  se creará un área de desplazamiento que permitirá desplazarse hacia abajo si el contenido excede el espacio disponible en la pantalla.
        <ScrollView contentContainerStyle={styles.container}>
            <Image
                source={require('../img/img1.webp')}
                style={styles.image}
            />
            <Image
                source={require('../img/img2.webp')}
                style={styles.image}
            />
            <Image
                source={require('../img/img3.webp')}
                style={styles.image}
            />
            <Image
                source={require('../img/img4.webp')}
                style={styles.image}
            />
            <Image
                source={require('../img/img5.webp')}
                style={styles.image}
            />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 200,
        height: 200,
        marginBottom: 10,
    },
});



// tengo que crearme una carpeta Theme para poder exportar los estilos de PaginaINterna