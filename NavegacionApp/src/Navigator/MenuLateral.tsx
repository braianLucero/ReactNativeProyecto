import React from 'react';
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView, DrawerContentOptions } from '@react-navigation/drawer';
import { SettingsScreen } from '../Screen/SettingsScreen';
import { StackNavigator } from './StackNavigator';
import { useWindowDimensions, Text, View, Image, TouchableOpacity } from 'react-native'; // Importa Image aquí
import { styles } from '../theme/appTheme';

const Drawer = createDrawerNavigator();

export const MenuLateral = () => {
    // const { width } = useWindowDimensions();

    // Componente de menú lateral    
    return (
        <Drawer.Navigator
            // drawerType={width >= 768 ? 'permanent' : 'front '}   Si el ancho (width) es mayor o igual a 768, se establecerá drawerType en 'permanent'. Esto significa que el menú lateral permanecerá visible todo el tiempo, independientemente de si el usuario lo abre o lo cierra.
            drawerContent={(props) => <MenuInterno {...props} />}
        >
            <Drawer.Screen name="StackNavigator" component={StackNavigator} />
            <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
        </Drawer.Navigator>
    );
};

const MenuInterno = ({ navigation }: DrawerContentComponentProps<DrawerContentOptions>) => {
    return (
        <DrawerContentScrollView>
            <View style={styles.avatarContainer}>
                <Image
                    source={{
                        uri: "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250" // Usa "uri" en lugar de "url"
                    }}
                    style={styles.avatar}
                />
            </View>

            {/* Opciones de menu */}

            <View style={styles.menuContainer}>

                <TouchableOpacity style={styles.menuBtn}
                    onPress={() => navigation.navigate("StackNavigator")}
                >
                    <Text style={styles.menutexto}>Navegacion </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.menuBtn}
                    onPress={() => navigation.navigate("SettingsScreen")}
                >
                    <Text style={styles.menutexto}>Ajustes</Text>
                </TouchableOpacity>
            </View>


        </DrawerContentScrollView>
    );
};
