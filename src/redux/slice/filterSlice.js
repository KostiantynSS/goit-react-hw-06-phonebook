import { filterInitialState } from 'redux/initialState';

import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    filterContacts: (state, action) => {
      return { filter: action.payload };
    },
  },
});
export const filterReducer = filterSlice.reducer;
export const { filterContacts } = filterSlice.actions;
