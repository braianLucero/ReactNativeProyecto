import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from '../Theme/Styles';

export const Pantalla1Screen = () => {
    return (
        <View style={styles.Contedor}>

            <View>
                <Text style={styles.textPrincipal}>Pagina Principal </Text>
            </View>

            <View>
                <TouchableOpacity style={styles.contNavigation}>
                    <Text style={styles.textNavigation}>
                        Pag2
                    </Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}
