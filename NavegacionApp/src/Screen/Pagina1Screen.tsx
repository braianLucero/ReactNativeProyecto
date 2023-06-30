import React from 'react'
import { Button, View, Text, TouchableOpacity } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack'
import { styles } from '../theme/appTheme';




interface Props extends StackScreenProps<any, any> { };

export const Pagina1Screen = ({ navigation }: Props) => {
    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>Pagina1Screen</Text>

            <Button
                title='Ir pagina 2'
                onPress={() => navigation.navigate('Pagina2Screen')}

            />

            <Text style={{ color: 'black', fontSize: 19, marginBottom: 10, marginTop: 10 }}>  Navegar con argumentos </Text>

            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('PersonaScreen', {
                        id: 1,
                        nombre: 'pedro'
                    })}
                    style={styles.btnGrande}
                >
                    <Text style={styles.textGrande}>Pedro</Text>
                </TouchableOpacity>

            </View>

        </View>
    )
}
