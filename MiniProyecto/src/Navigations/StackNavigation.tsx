import React from 'react';
import { LoginScreen } from '../Screens/LoginScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { PaginaInterior } from '../Screens/PaginaInterior';


const Stack = createStackNavigator();

export const StackNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="LoginScreen" options={{ title: 'Login' }} component={LoginScreen} />
                <Stack.Screen name="PaginaInterior" options={{ title: 'Pagina Interior' }} component={PaginaInterior} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}