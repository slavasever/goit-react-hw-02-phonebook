import React, { Component } from 'react';
import { customAlphabet } from 'nanoid';
// import s from './ContactForm.module.css';

const nanoid = customAlphabet('1234567890abcdef', 5);

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  inputHandler = event => {
    const { name, value } = event.currentTarget;

    this.setState({
      [name]: value,
    });
  };

  submitHandler = event => {
    event.preventDefault();

    const { name, number } = this.state;
    const id = nanoid();
    const { onSubmit } = this.props;

    onSubmit({ id, name, number });
  };

  formReset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    const { name, number } = this.state;

    return (
      <form onSubmit={this.submitHandler}>
        <label>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            value={name}
            required
            onChange={this.inputHandler}
          />
        </label>
        <label>
          Number
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={this.inputHandler}
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

export default ContactForm;
