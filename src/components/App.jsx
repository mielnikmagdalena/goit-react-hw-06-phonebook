import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addContact, deleteContact } from '../reducers/contactsReducer';
import ContactForm from './ContactForm/ContactForm.jsx';
import ContactList from './ContactList/ContactList.jsx';
import Filter from './Filter/Filter.jsx';
import styles from './App.module.css';

export const App = () => {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  const handleAddContact = newContact => {
    const existingContact = contacts.find(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );

    if (existingContact) {
      alert(`${newContact.name} is already in contacts.`);
      return;
    }

    dispatch(addContact(newContact));
  };

  const handleDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  return (
    <div className={styles.app}>
      <h1 className={styles.title}>Phonebook</h1>
      <ContactForm onAddContact={handleAddContact} />
      <h2 className={styles.section}>Contacts</h2>
      <Filter filter={filter} />
      <ContactList
        className={styles.section}
        onDeleteContact={handleDeleteContact}
      />
    </div>
  );
};
