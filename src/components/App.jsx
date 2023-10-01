import React from 'react';
import ContactForm from './ContactForm/ContactForm.jsx';
import ContactList from './ContactList/ContactList.jsx';
import Filter from './Filter/Filter.jsx';
import styles from './App.module.css';
export const App = () => {
  return (
    <div className={styles.app}>
      <h1 className={styles.title}>Phonebook</h1>
      <ContactForm />
      <h2 className={styles.section}>Contacts</h2>
      <Filter />
      <ContactList className={styles.section} />
    </div>
  );
};
