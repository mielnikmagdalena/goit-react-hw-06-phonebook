import { useSelector, useDispatch } from 'react-redux';
import { addContact } from '../redux/contactsActions';
import styles from './App.module.css';

export const App = () => {
  const contacts = useSelector(state => state.contacts);
  const dispatch = useDispatch();

  if (existingContact) {
    alert(`${newContact.name} is already in contacts.`);
    return;
  }

  dispatch(addContact(newContact)); // Wywołaj akcję addContact
};

return (
  <div className={styles.app}>
    <h1 className={styles.title}>Phonebook</h1>
    <h2 className={styles.section}>Contacts</h2>
    <ContactList className={styles.section} />
  </div>
);
