import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import { camperReducer } from './slice';
import storage from 'redux-persist/lib/storage';


const camperPersistConfig = {
    key: 'campers',
    storage,
    // whitelist: ['token'],
};
const reducer = combineReducers({
   campers: persistReducer(camperPersistConfig, camperReducer),
})
export const store = configureStore({
    reducer: reducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export const persistor = persistStore(store);