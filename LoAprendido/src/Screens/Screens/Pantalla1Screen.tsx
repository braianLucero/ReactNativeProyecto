import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from '../../Theme/Styles';
import { StackScreenProps } from '@react-navigation/stack';


interface Props extends StackScreenProps<any, any> { }
export const Pantalla1Screen = ({ navigation }: Props) => {
    return (
        <View style={styles.Contedor}>

            <View>
                <Text style={styles.textPrincipal}>Pagina Principal </Text>
            </View>

            <View>
                <TouchableOpacity style={styles.contNavigation}
                    onPress={() => navigation.navigate('Pantalla2Screen')}
                >
                    <Text style={styles.textNavigation}>
                        Pag2
                    </Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}
