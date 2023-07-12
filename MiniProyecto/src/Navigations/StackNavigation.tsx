import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from '../Screens/LoginScreen';
import { PaginaInterior } from '../Screens/PaginaInterior';

const Stack = createStackNavigator();
export const StackNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ title: 'Login' }} />
                <Stack.Screen name="PaginaInterior" component={PaginaInterior} options={{ title: 'Pagina Interior' }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

