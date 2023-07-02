import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Pantalla1Screen } from '../Screens/Pantalla1Screen';

const Stack = createStackNavigator();

export const StackNavigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Pantalla1Screen" options={{ title: 'Home' }} component={Pantalla1Screen} />
        </Stack.Navigator>
    );
}