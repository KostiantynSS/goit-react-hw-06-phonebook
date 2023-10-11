import { contactsInitialState } from '../initialState';

import { createSlice, nanoid } from '@reduxjs/toolkit';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.contacts.push(action.payload);
      },
      prepare(data) {
        return { payload: { id: nanoid(5), ...data } };
      },
    },
    deleteContact: (state, action) => {
      const index = state.contacts.findIndex(
        ({ name }) => name === action.payload
      );
      state.contacts.splice(index, 1);
    },
  },
});
export const contactsReducer = contactsSlice.reducer;

export const { addContact, deleteContact } = contactsSlice.actions;
