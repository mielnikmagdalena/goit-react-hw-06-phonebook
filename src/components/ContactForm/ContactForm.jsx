import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contactsActions';
import { nanoid } from 'nanoid';
import styles from './ContactForm.module.css';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);

  const handleSubmit = event => {
    event.preventDefault();
    const newContact = { id: nanoid(), name, number };

    // Sprawdź, czy kontakt o takim id już istnieje
    if (contacts.some(contact => contact.name === newContact.name)) {
      alert(`${newContact.name} is already in contacts.`);
      return;
    }

    dispatch(addContact(newContact));
    setName('');
    setNumber('');
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder="Enter name"
        required
        className={styles.input}
      />
      <input
        type="tel"
        name="number"
        value={number}
        onChange={e => setNumber(e.target.value)}
        placeholder="Enter number"
        required
        className={styles.input}
      />
      <button type="submit" className={styles.button}>
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
