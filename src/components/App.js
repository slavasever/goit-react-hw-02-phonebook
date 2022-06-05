import React, { Component } from 'react';
import { customAlphabet } from 'nanoid';
import Section from 'Section';

const nanoid = customAlphabet('1234567890abcdef', 5);
class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  inputHandler = event => {
    const { name, value } = event.currentTarget;
    // console.log(event.currentTarget.name);
    this.setState({
      [name]: value,
    });
  };

  submitHandler = event => {
    event.preventDefault();

    const { contacts, name, number } = this.state;
    const id = nanoid();

    this.setState(prevState => ({
      contacts: [{ id, name, number }, ...contacts],
    }));
    this.formReset();
  };

  formReset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  filterReset = () => {
    this.setState({
      filter: '',
    });
  };

  contactFiltration = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const { name, number, filter } = this.state;
    const filteredContacts = this.contactFiltration();

    return (
      <>
        <Section title="Phonebook">
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
        </Section>
        <Section title="Contacts">
          <div>
            <label>
              Find contacts by name
              <input
                type="text"
                name="filter"
                value={filter}
                onChange={this.inputHandler}
              />
            </label>
            <button type="button" onClick={this.filterReset}>
              Clear
            </button>
          </div>

          <ul>
            {filteredContacts.map(contact => {
              const { id, name, number } = contact;
              return (
                <li key={id}>
                  <p>
                    {name}: {number}
                  </p>
                </li>
              );
            })}
          </ul>
        </Section>
      </>
    );
  }
}

export default App;
