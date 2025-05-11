import { useDispatch } from 'react-redux';
import { FaUser, FaPhone } from 'react-icons/fa';
import { deleteContact } from '../../redux/contactsOps';
import s from './Contact.module.css';


const Contact = ({ id, name, number }) => {
    const dispatch = useDispatch();

    return (
        <ul className={s.list}>
            <li className={s.item}>
                <span>
                    <p><FaUser /> {name}</p>
                    <p><FaPhone /> {number}</p>
                </span>
                <button className={s.but} onClick={() => dispatch(deleteContact(id))}>Delete</button>
            </li>
        </ul>
    );
};

export default Contact;
