import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsActions';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid'; // Importuj nanoid
import styles from './ContactList.module.css';

const ContactList = () => {
  const { contacts, filter } = useSelector(state => state);
  const dispatch = useDispatch();
  const getFilteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const filteredContacts = getFilteredContacts();

  return (
    <ul className={styles.list}>
      {filteredContacts.map(contact => (
        <li key={nanoid()} className={styles.item}>
          {contact.name}: {contact.number}
          <button
            className={styles.button}
            onClick={() => dispatch(deleteContact(contact.id))}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
