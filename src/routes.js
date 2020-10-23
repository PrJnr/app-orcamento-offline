/* eslint-disable react/prop-types */
import React from 'react';
import 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Perfil from './pages/Perfil';
import Orcamentos from './pages/Orcamentos';

import AddOrcamento from './pages/AddOrcamento';
import DetailsOrcamento from './pages/DetailsOrcamento';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const OrcamentoStackScreen = () => (
    <Stack.Navigator>
        <Stack.Screen
            name="Orçamentos"
            component={Orcamentos}
            options={{
                headerTransparent: true,
                headerTintColor: '#18b5',
                headerTitle: false,
            }}
        />
        <Stack.Screen
            name="Detalhes"
            component={DetailsOrcamento}
            options={{
                headerTintColor: '#fff',
                headerStyle: {
                    backgroundColor: '#18b5',
                },

                headerLeftContainerStyle: { marginRight: 0 },
            }}
        />
    </Stack.Navigator>
);

Icon.loadFont();

const Routes = () => {
    return (
        <Tab.Navigator
            initialRouteName="Orcamentos"
            tabBarOptions={{
                activeTintColor: '#fff',
                inactiveTintColor: '#9999',
                activeBackgroundColor: '#18b5',
                inactiveBackgroundColor: '#fff',
            }}
        >
            <Tab.Screen
                name="Orçamentos"
                component={OrcamentoStackScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Icon
                            name="event"
                            size={20}
                            color={focused ? '#fff' : '#999'}
                        />
                    ),
                }}
            />

            <Tab.Screen
                name="Novo Orçamento"
                component={AddOrcamento}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Icon
                            name="add-circle-outline"
                            size={20}
                            color={focused ? '#fff' : '#999'}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="Meu Perfil"
                component={Perfil}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Icon
                            name="person"
                            size={20}
                            color={focused ? '#fff' : '#999'}
                        />
                    ),
                }}
            />
        </Tab.Navigator>
    );
};

export default Routes;
