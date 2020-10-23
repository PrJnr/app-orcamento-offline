import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Provider } from 'react-redux';
import Routes from './routes';

import { Store, persistor } from './store';

export default function App() {
    return (
        <NavigationContainer>
            <Provider store={Store}>
                <PersistGate persistor={persistor}>
                    <StatusBar
                        barStyle="light-content"
                        backgroundColor="#18b5"
                    />
                    <Routes />
                </PersistGate>
            </Provider>
        </NavigationContainer>
    );
}
