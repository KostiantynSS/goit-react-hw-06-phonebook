export const reducer = (state, { type, payload }) => {
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
