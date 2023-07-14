import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StackNavigation } from './StackNavigation';
import { HomeScreen } from './HomeScreen';
import { SettingsScreen } from './SettingsScreen';
import { ProfileScreen } from './ProfileScreen';

const Drawer = createDrawerNavigator();

export const DrawerNavigation = () => {
    return (
        <Drawer.Navigator
            initialRouteName="Home"
            drawerStyle={{
                backgroundColor: '#fff',
                width: 240,
            }}
            drawerContentOptions={{
                activeTintColor: '#e91e63',
                itemStyle: { marginVertical: 10 },
            }}
        >
            <Drawer.Screen name="Home" component={HomeScreen} />
            <Drawer.Screen name="StackNavigation" component={StackNavigation} />
            <Drawer.Screen name="Settings" component={SettingsScreen} />
            <Drawer.Screen name="Profile" component={ProfileScreen} />
        </Drawer.Navigator>
    );
}
