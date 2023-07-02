import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from '../Theme/Styles';
import { StackScreenProps } from '@react-navigation/stack';

interface Props extends StackScreenProps<any, any> { }

export const Pantalla3Screen = ({ navigation }: Props) => {
    return (
        <View style={styles.Contedor}>

            <View>
                <Text style={styles.textPrincipal}>Screen 3</Text>
            </View>

            <View>
                <TouchableOpacity style={styles.contNavigation}
                >
                    <Text style={styles.textNavigation}
                        onPress={() => navigation.navigate('Pantalla2Screen')}
                    >
                        Back
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.contNavigation}
                >
                    <Text style={styles.textNavigation}
                        onPress={() => navigation.navigate('Pantalla1Screen')}
                    >
                        Home
                    </Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}
