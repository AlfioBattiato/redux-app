// import { configureStore } from '@reduxjs/toolkit'
// import mainReducer from '../reducers' // non serve /index, basta puntare alla cartella che lo contiene

// // configureStore è la funzione principale di redux, quella che GENERA lo stato condiviso

// const store = configureStore({
//   reducer: mainReducer,
// })

// export default store
// configureStore.js

import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

import rootReducer from '../reducers';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: false,
    })
  },
})
const persistor = persistStore(store);

export { store, persistor }; // Esporta sia store che persistor separatamente

