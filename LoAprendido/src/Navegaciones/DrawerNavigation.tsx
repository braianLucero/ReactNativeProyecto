import React from 'react';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerContentComponentProps, DrawerContentOptions } from '@react-navigation/drawer';
import { StackNavigation } from './StackNavigation';
import { DrawersScreen } from '../Screens/Screens/Drawers/DrawersScreen';
import { View, Image } from 'react-native';

const Drawer = createDrawerNavigator();

export const DrawerNavigation = () => {
    return (
        <Drawer.Navigator
            drawerContent={(Props) => <CustomDrawerContent {...Props} />}
        >
            <Drawer.Screen name="StackNavigation" component={StackNavigation} />
            <Drawer.Screen name="DrawerScreen" component={DrawersScreen} />
        </Drawer.Navigator>
    );
}


const CustomDrawerContent = ({ navigation }: DrawerContentComponentProps<DrawerContentOptions>) => {
    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView>
                {/* Agrega aquí tu imagen */}
                <View style={{ alignItems: 'center', marginTop: 20 }}>
                    <Image
                        source={{
                            uri: 'https://st3.depositphotos.com/9998432/13335/v/600/depositphotos_133352010-stock-illustration-default-placeholder-man-and-woman.jpg'
                        }}
                        style={{ width: 150, height: 150, borderRadius: 75 }}
                    />
                </View>

                {/* Resto de los elementos del menú lateral */}
                <DrawerItem
                    label="StackNavigation"
                    onPress={() => navigation.navigate('StackNavigation')}
                />
                <DrawerItem
                    label="DrawerScreen"
                    onPress={() => navigation.navigate('DrawerScreen')}
                />
                {/* ...otros elementos del menú */}
            </DrawerContentScrollView>
        </View>
    );
};