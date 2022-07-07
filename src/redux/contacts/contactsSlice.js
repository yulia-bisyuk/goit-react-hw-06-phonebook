import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const contactsSlice = createSlice({
  name: 'contacts',

  initialState: {
    items: [],
    filter: '',
  },

  reducers: {
    addItem(state, action) {
      const newContact = {
        name: action.payload.userName,
        number: action.payload.userNumber,
        id: nanoid(),
      };

      state.items.push(newContact);
    },

    deleteItem(state, action) {
      state.items = state.items.filter(item => item.id !== action.payload);
    },

    changeFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

const persistConfig = {
  key: 'contacts',
  storage,
  blacklist: ['filter'],
};

export const persistedContactsReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);

export const { addItem, deleteItem, changeFilter } = contactsSlice.actions;
