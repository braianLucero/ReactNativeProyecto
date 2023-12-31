import React from 'react'
import { View, Text } from 'react-native';
import { styles } from '../theme/appTheme';
import { StackScreenProps } from '@react-navigation/stack';

// interface RouterParams {
//     id: number;
//     nombre: string
// }


interface Props extends StackScreenProps<any, any> { };

export const PersonaScreen = ({ route }: Props) => {
    // const params = route.params as RouterParams;
    const params = route.params;
    return (
        <View style={styles.globalMargin}>

            <Text style={styles.title}>
                {
                    JSON.stringify(params, null, 3)
                }
            </Text>

        </View>
    )
}
