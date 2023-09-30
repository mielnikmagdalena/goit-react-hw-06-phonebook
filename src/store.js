// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './redux/contactsReducer';
import filterReducer from './redux/filterReducer';
export const store = configureStore({
  reducer: {
    contacts: contactsReducer, // Reduktor kontaktów
    filter: filterReducer,
  },
});
