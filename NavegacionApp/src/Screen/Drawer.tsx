import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { View, Text } from 'react-native';

// Componente de pantalla principal
function HomeScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>¡Bienvenido a la pantalla principal!</Text>
        </View>
    );
}

// Componente de pantalla de ajustes
function SettingsScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>¡Bienvenido a la pantalla de ajustes!</Text>
        </View>
    );
}

// Crear el cajón de navegación
const Drawer = createDrawerNavigator();

// Componente de navegación principal
function App() {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Home">
                <Drawer.Screen name="Home" component={HomeScreen} />
                <Drawer.Screen name="Settings" component={SettingsScreen} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

export default App;
