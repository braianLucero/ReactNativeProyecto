import React from 'react'
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { styles } from '../theme/appTheme';

export const Pagina2Screen = () => {

    const navigator = useNavigation()

    return (
        <View style={styles.globalMargin}>
            <Text>Pagina2Screen</Text>

            <Button
                title=' Ir pagina 3'
                onPress={() => navigator.navigate('Pagina3Screen')}
            />

        </View>
    )
}
