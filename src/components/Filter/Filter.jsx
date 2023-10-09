import { useDispatch, useSelector } from 'react-redux';
import css from './filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();
  const { filter } = useSelector(state => state);

  const changeFilter = e => {
    const data = e.currentTarget.value;
    dispatch({ type: 'filterP', payload: data });
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
