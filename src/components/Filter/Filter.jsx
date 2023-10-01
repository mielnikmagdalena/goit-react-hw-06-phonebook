import React from 'react';
import styles from './Filter.module.css';
import { useDispatch } from 'react-redux';
import { setFilter } from '../../redux/filterActions';

const Filter = () => {
  const dispatch = useDispatch();

  const handleChange = event => {
    const newFilter = event.target.value;
    dispatch(setFilter(newFilter));
  };

  return (
    <input
      className={styles.input}
      type="text"
      onChange={handleChange}
      placeholder="Search contacts"
    />
  );
};
export default Filter;
