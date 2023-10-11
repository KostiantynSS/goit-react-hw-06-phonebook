// import { useEffect } from 'react';
// import { useSelector } from 'react-redux';
import ContactForm from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import Filter from './Filter/Filter';

const App = () => {
  // const { contacts } = useSelector(state => state);

  // useEffect(() => {
  //   localStorage.setItem('contact', JSON.stringify(contacts));
  // }, [contacts]);

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </>
  );
};

export default App;
