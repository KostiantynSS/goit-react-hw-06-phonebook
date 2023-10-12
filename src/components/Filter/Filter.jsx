import { useDispatch, useSelector } from 'react-redux';
import css from './filter.module.css';
import { filterContacts } from 'redux/slice/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);

  const changeFilter = e => {
    const data = e.currentTarget.value;
    dispatch(filterContacts(data));
  };

  return (
    <input
      className={css.input}
      type="text"
      value={filter}
      onChange={changeFilter}
    />
  );
};

export default Filter;
