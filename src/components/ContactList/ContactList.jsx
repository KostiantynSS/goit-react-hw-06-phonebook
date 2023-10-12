import css from './contactList.module.css';
import ContactItem from 'components/ContactItem/ContactItem';
import { useSelector } from 'react-redux';

export const ContactList = () => {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);
  const normalizedFilter = filter.toLowerCase();
  const visibleContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <>
      <ul className={css.list}>
        {visibleContacts.map(contact => (
          <ContactItem contact={contact} key={contact.id} />
        ))}
      </ul>
    </>
  );
};
