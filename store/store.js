import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { setupListeners } from '@reduxjs/toolkit/query';
import persistStore from 'redux-persist/es/persistStore';
import { userAuthApi } from './api/auth/auth';

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  [userAuthApi.reducerPath]: userAuthApi.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
      },
    }).concat(userAuthApi.middleware),
});

setupListeners(store.dispatch);

const persistor = persistStore(store);

export { store, persistor };
