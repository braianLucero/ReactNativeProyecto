import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { PantallaScreen } from '../Screens/PantallaScreen';

const Stack = createStackNavigator();

export const StackNavigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="PantallaScreen" component={PantallaScreen} />
        </Stack.Navigator>
    );
}