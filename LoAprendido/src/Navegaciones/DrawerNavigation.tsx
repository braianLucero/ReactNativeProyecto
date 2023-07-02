import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StackNavigation } from './StackNavigation';
import { DrawersScreen } from '../Screens/Screens/Drawers/DrawersScreen';

const Drawer = createDrawerNavigator();

export const DrawerNavigation = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="StackNavigation" component={StackNavigation} />
            <Drawer.Screen name="DrawerScreen" component={DrawersScreen} />
        </Drawer.Navigator>
    );
}