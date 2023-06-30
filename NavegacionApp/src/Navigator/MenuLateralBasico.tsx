import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { SettingsScreen } from '../Screen/SettingsScreen';
import { StackNavigator } from './StackNavigator';
import { useWindowDimensions } from 'react-native';

const Drawer = createDrawerNavigator();


export const MenuLateralBasico = () => {

    // const { width } = useWindowDimensions();

    // Componente de menú lateral    
    return (
        <Drawer.Navigator
        // drawerType={width >= 768 ? 'permanent' : 'front '}   Si el ancho (width) es mayor o igual a 768, se establecerá drawerType en 'permanent'. Esto significa que el menú lateral permanecerá visible todo el tiempo, independientemente de si el usuario lo abre o lo cierra.
        >
            <Drawer.Screen name="StackNavigator" options={{ title: 'Home' }} component={StackNavigator} />
            <Drawer.Screen name="SettingsScreen" options={{ title: 'settings' }} component={SettingsScreen} />
        </Drawer.Navigator >
    );
};
