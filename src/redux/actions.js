import { ADD_CONTACT, DELETE_CONTACT, FILTER } from './types';
export const addContact = data => ({ type: ADD_CONTACT, payload: data });
export const deleteContact = data => ({ type: DELETE_CONTACT, payload: data });
export const filterContacts = data => ({ type: FILTER, payload: data });
