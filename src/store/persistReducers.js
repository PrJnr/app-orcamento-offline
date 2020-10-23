import AsyncStorage from '@react-native-community/async-storage';

import { persistReducer } from 'redux-persist';

export default (reducers) => {
    const persistedReducer = persistReducer(
        {
            key: 'orcs',
            storage: AsyncStorage,
            whitelist: ['orcamento'],
        },
        reducers,
    );

    return persistedReducer;
};
