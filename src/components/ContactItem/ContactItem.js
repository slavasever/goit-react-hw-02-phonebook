import React from 'react';
import PropTypes from 'prop-types';
import s from './ContactItem.module.css';

const ContactItem = ({ contacts, clickHandler }) => {
  return contacts.map(contact => {
    const { id, name, number } = contact;

    return (
      <li key={id} className={s.item}>
        <p className={s.text}>
          - {name}: {number}
        </p>
        <button
          type="button"
          className={s.button}
          onClick={() => clickHandler(id)}
        >
          Delete
        </button>
      </li>
    );
  });
};

ContactItem.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  clickHandler: PropTypes.func.isRequired,
};

export default ContactItem;
