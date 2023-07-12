import React from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';

export const PaginaInterior = () => {
    return (
        <View style={styles.container}>
            <Image
                source={require('../assets/image.png')}
                style={styles.image}
            />
            <Text style={styles.title}>Pagina Interior</Text>
            <Text style={styles.description}>
                Bienvenido a la página interior de la aplicación.
            </Text>
            <Button
                title="Realizar acción"
                onPress={() => {
                    // Acción a realizar que aun estoy pensando 
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 200,
        height: 200,
        marginBottom: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    description: {
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 20,
    },
});

// tengo que crearme una carpeta Theme para poder exportar los estilos de PaginaINterna 