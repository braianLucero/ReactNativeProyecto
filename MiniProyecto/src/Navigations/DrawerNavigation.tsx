import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StackNavigation } from './StackNavigation';
import { HomeScreen } from './HomeScreen';
import { SettingsScreen } from './SettingsScreen';

const Drawer = createDrawerNavigator();

export const DrawerNavigation = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={HomeScreen} />
            <Drawer.Screen name="StackNavigation" component={StackNavigation} />
            <Drawer.Screen name="Settings" component={SettingsScreen} />
        </Drawer.Navigator>
    );
}
