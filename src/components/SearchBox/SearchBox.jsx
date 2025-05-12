import { useDispatch, useSelector } from "react-redux";
import style from "./SearchBox.module.css";
import { changeFilter } from "../../redux/filters/slice";

const SearchBox = () => {
    const dispatch = useDispatch();
    const filter = useSelector((state) => state.filters.filter);
    const handleFilterChange = (value) => dispatch(changeFilter(value));

    return (
        <div className={style.search}>
            <p className={style.text}>Find contacts by name:</p>
            <input
                className={style.input}
                type="text"
                value={filter}
                onChange={(e) => handleFilterChange(e.target.value)}
            />
        </div>
    );
};

export default SearchBox;