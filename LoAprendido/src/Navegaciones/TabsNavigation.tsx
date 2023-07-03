import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TabsScreen } from '../Screens/Screens/Tabs/TabsScreen';
import { StyleSheet } from 'react-native';
import { Tabs2Screen } from '../Screens/Screens/Tabs/Tabs2Screen ';
import { Tabs3Screen } from '../Screens/Screens/Tabs/Tabs3Screen ';

const Tab = createBottomTabNavigator();

export const Tabs = () => {
    return (
        <Tab.Navigator
            tabBarOptions={{
                activeTintColor: '#000',
                inactiveTintColor: '#999999',
                style: styles.tabBar,
                labelStyle: styles.tabLabel,
            }}
        >
            <Tab.Screen name="TabsScreen" component={TabsScreen} />
            <Tab.Screen name="Tabs2Screen" component={Tabs2Screen} />
            <Tab.Screen name="Tabs3Screen" component={Tabs3Screen} />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    tabBar: {
        backgroundColor: '#333333',
        borderTopWidth: 1,
        borderTopColor: '#a8a8a8',
    },
    tabLabel: {
        fontSize: 14,
        fontWeight: 'bold',
    },
});
