import { useDispatch } from 'react-redux';
import css from './contactItem.module.css';

const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();

  const deleteBtnHandler = e => {
    const contactToDelete =
      e.currentTarget.previousElementSibling.firstChild.data;
    dispatch({ type: 'deleteContact', payload: contactToDelete });
  };

  return (
    <li className={css.listItem}>
      <p className={css.listItemP}>
        {contact.name}: {contact.number}
      </p>
      <button className={css.listItemBtn} onClick={deleteBtnHandler}>
        Delete
      </button>
    </li>
  );
};

export default ContactItem;
