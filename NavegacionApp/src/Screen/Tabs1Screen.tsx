import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const Tabs1Screen = () => {
    useEffect(() => {
        console.log('Tabs 1 Screen Effect');
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Tab 1 Screen</Text>
        </View>
    );
};

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
    },
});

