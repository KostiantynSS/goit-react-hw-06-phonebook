import { createStore } from 'redux';

const reserveContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const localContacts = JSON.parse(localStorage.getItem('contact'));

const initialState = {
  contacts: localContacts.length > 0 ? localContacts : reserveContacts,
  filter: '',
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case 'addContact':
      return { ...state, contacts: [...state.contacts, payload] };
    case 'deleteContact':
      return {
        ...state,
        contacts: [...state.contacts.filter(({ name }) => name !== payload)],
      };
    case 'filter':
      return { ...state, filter: payload };
    default:
      return state;
  }
};

export const store = createStore(reducer, initialState);
