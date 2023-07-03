import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TabsScreen } from '../Screens/Screens/Tabs/TabsScreen';
import { Tabs2Screen } from '../Screens/Screens/Tabs/Tabs2Screen ';
import { Tabs3Screen } from '../Screens/Screens/Tabs/Tabs3Screen ';

const Tab = createBottomTabNavigator();

export const Tabs = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="TabsScreen" component={TabsScreen} />
            <Tab.Screen name="Tabs2Screen" component={Tabs2Screen} />
            <Tab.Screen name="Tabs3Screen" component={Tabs3Screen} />
        </Tab.Navigator>
    );
}