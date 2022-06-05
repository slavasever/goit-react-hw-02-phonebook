import React from 'react';
import PropTypes from 'prop-types';
import s from './ContactsList.module.css';

const ContactForm = ({ children }) => {
  return <ul className={s.list}>{children}</ul>;
};

ContactForm.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ContactForm;
