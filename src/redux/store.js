import { configureStore } from "@reduxjs/toolkit";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import storage from "redux-persist/lib/storage";
import { filtersReducer } from "./filtersSlice";
import { contactsReducer } from "./contactsSlice";

// початковий стан Redux
export const INITIAL_STATE = {
  contacts: {
    items: [],
  },
};

// Reducers
// export const ContactsReducer = (state = INITIAL_STATE, action) => {
//   switch (action.type) {
//     case "contacts/addContact": {
//       return { ...state, contacts: [...state.contacts, action.payload] };
//     }
//     case "contacts/deleteContact": {
//       return {
//         ...state,
//         contacts: state.contacts.filter(
//           (contact) => contact.id !== action.payload
//         ),
//       };
//     }

//     default:
//       return state;
//   }
// };

// Action creators
export const addContact = (payload) => {
  return { type: "contacts/addContact", payload };
};
export const deleteContact = (payload) => {
  return { type: "contacts/deleteContact", payload };
};

const contactsConfig = {
  key: "contacts",
  storage,
  whitelist: ["items"],
};

const persistedContactsReducer = persistReducer(
  contactsConfig,
  contactsReducer
);

export const store = configureStore({
  reducer: {
    contacts: persistedContactsReducer,
    filters: filtersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
