import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsSlice';
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

// const contactsConfig = {
//   key: 'contacts',
//   storage,
//   whitelist: ['contacts'],
//   // blacklist: ['filter'],
// };
export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    // persistReducer(contactsConfig, contactsReducer),
  },
  // middleware: getDefaultMiddleware =>
  //   getDefaultMiddleware({
  //     serializableCheck: {
  //       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  //     },
  //   }),
});
// export const persistor = persistStore(store);
