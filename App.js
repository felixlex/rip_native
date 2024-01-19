import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RecordListScreen from './screens/Record_List';
import RecordScreen from './screens/Record'
import { store } from './store';
import { Provider } from 'react-redux';

const Stack = createNativeStackNavigator();
//<Stack.Screen name='Информация о товаре' component={ProductScreen} />
export default function App() {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name='Список рекордов' component={RecordListScreen} />
                    <Stack.Screen name='Информация о рекорде' component={RecordScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
}