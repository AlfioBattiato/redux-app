// import { configureStore } from '@reduxjs/toolkit'
// import mainReducer from '../reducers' // non serve /index, basta puntare alla cartella che lo contiene

// // configureStore è la funzione principale di redux, quella che GENERA lo stato condiviso

// const store = configureStore({
//   reducer: mainReducer,
// })

// export default store
// configureStore.js

import { configureStore,combineReducers  } from '@reduxjs/toolkit';
import jobReducer from '../reducers/jobsReducer';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import dataReducer from '../reducers/dataReducer';

// import rootReducer from '../reducers';

const persistConfig = {
  key: 'root',
  storage,
};

const allMyReducer=combineReducers({
  favourites:jobReducer,
  data:dataReducer

})
const persistedReducer = persistReducer(persistConfig, allMyReducer);

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

