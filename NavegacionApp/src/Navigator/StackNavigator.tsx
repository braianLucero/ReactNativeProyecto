import { createStackNavigator } from '@react-navigation/stack';
import { Pagina1Screen } from '../Screen/Pagina1Screen';
import { Pagina2Screen } from '../Screen/Pagina2Screen';
import { Pagina3Screen } from '../Screen/Pagina3Screen';
import { PersonaScreen } from '../Screen/PersonaScreen';

const Stack = createStackNavigator();

export const StackNavigator = () => {
    return (
        <Stack.Navigator
            // initialRouteName=''
            screenOptions={{
                headerStyle: {
                    elevation: 0,
                    shadowColor: 'transparent'
                },
                cardStyle: {
                    backgroundColor: 'white'
                }
            }}

        >
            <Stack.Screen name="Pagina1Screen" options={{ title: ' Pagina 1 ' }} component={Pagina1Screen} />
            <Stack.Screen name="Pagina2Screen" options={{ title: ' Pagina 2  ' }} component={Pagina2Screen} />
            <Stack.Screen name="Pagina3Screen" options={{ title: ' pagina 3 ' }} component={Pagina3Screen} />
            <Stack.Screen name="PersonaScreen" component={PersonaScreen} />
        </Stack.Navigator >
    );
}