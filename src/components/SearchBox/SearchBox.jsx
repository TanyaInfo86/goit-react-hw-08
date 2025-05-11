// import { useSelector, useDispatch } from 'react-redux';
// import { changeFilter } from '../../redux/filtersSlice';
// import s from './SearchBox.module.css';

// const SearchBox = () => {
//     const dispatch = useDispatch();
//     const filter = useSelector(state => state.filters.name);

//     const handleChange = (value) => {
//         dispatch(changeFilter(value));
//     };

//     return (
//         <div className={s.box}>
//             <h2 className={s.text}>Find contacts by name</h2>
//             <input
//                 className={s.input}
//                 type="text"
//                 value={filter}
//                 onChange={(e) => handleChange(e.target.value)}
//             />
//         </div>
//     );
// };

// export default SearchBox;
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter, selectNameFilter } from '../../redux/filtersSlice';
import styles from './SearchBox.module.css';

const SearchBox = () => {
    const dispatch = useDispatch();
    const filter = useSelector(selectNameFilter);

    const handleChange = (e) => {
        dispatch(changeFilter(e.target.value));
    };

    return (
        <div className={styles.box}>
            <h2 className={styles.text}>Знайти контакти за ім’ям</h2>
            <input
                className={styles.input}
                type="text"
                value={filter}
                onChange={handleChange}
            />
        </div>
    );
};

export default SearchBox;
