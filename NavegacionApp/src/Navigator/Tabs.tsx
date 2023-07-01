
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Tabs1Screen } from '../Screen/Tabs1Screen';
import { Tabs3Screen } from '../Screen/Tabs3Screen ';
import { Tabs2Screen } from '../Screen/Tabs2Screen';

const Tab = createBottomTabNavigator();

export const Tabs = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Tabs1Screen" component={Tabs1Screen} />
            <Tab.Screen name="Tabs2Screen" component={Tabs2Screen} />
            <Tab.Screen name="Tabs3Screen" component={Tabs3Screen} />
        </Tab.Navigator>
    );
}