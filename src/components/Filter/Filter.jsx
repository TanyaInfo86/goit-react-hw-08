
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter, selectNameFilter } from '../../redux/filtersSlice';
import styles from './Filter.module.css';

const Filter = () => {
    const dispatch = useDispatch();
    const filter = useSelector(selectNameFilter);

    const handleChange = e => {
        dispatch(changeFilter(e.target.value));
    };

    return (
        <label className={styles.label}>
            Пошук контактів:
            <input type="text" value={filter} onChange={handleChange} />
        </label>
    );
};

export default Filter;
