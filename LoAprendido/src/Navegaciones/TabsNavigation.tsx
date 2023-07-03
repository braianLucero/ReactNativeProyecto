import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TabsScreen } from '../Screens/Screens/Tabs/TabsScreen';

const Tab = createBottomTabNavigator();

export const Tabs = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="TabsScreen" component={TabsScreen} />
            {/* <Tab.Screen name="Settings" component={SettingsScreen} /> */}
        </Tab.Navigator>
    );
}