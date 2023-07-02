import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Pantalla1Screen } from '../Screens/Pantalla1Screen';
import { Pantalla2Screen } from '../Screens/Pantalla2Screen ';
import { Pantalla3Screen } from '../Screens/Pantalla3Screen ';

const Stack = createStackNavigator();

export const StackNavigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Pantalla1Screen" options={{ title: 'Home' }} component={Pantalla1Screen} />
            <Stack.Screen name="Pantalla2Screen" options={{ title: 'Screen 2' }} component={Pantalla2Screen} />
            <Stack.Screen name="Pantalla3Screen" options={{ title: 'Screen 3' }} component={Pantalla3Screen} />
        </Stack.Navigator>
    );
}