/* eslint-disable import/no-extraneous-dependencies */
import { createStore } from 'redux';
import { persistStore } from 'redux-persist';

import rootReducer from './modules/rootReducer';

import persistReducers from './persistReducers';

const Store = createStore(persistReducers(rootReducer));
const persistor = persistStore(Store);

export { Store, persistor };
