import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from '../Theme/Styles';
import { useNavigation } from '@react-navigation/core';


export const Pantalla2Screen = () => {
    const navigation = useNavigation();  // otra forma de traer el navigation 
    return (
        <View style={styles.Contedor}>

            <View>
                <Text style={styles.textPrincipal}>Estas en Screen 2  </Text>
            </View>

            <View>
                <TouchableOpacity style={styles.contNavigation}
                    onPress={() => navigation.navigate('Pantalla3Screen')}
                >
                    <Text style={styles.textNavigation}>
                        Pag3
                    </Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}
