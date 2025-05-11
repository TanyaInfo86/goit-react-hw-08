import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from './src/redux/contactsOps';
import ContactForm from './src/components/ContactForm/ContactForm';
import ContactList from './src/components/ContactList/ContactList';
import SearchBox from './src/components/SearchBox/SearchBox';
import styles from './App.module.css';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={styles.wrapper}>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
};

export default App;

