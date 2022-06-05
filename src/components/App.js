import React, { Component } from 'react';
import Section from 'Section';
import ContactForm from './ContactForm';
import ContactsList from './ContactsList';
import ContactItem from './ContactItem';
import Filter from './Filter';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = contact => {
    const { contacts } = this.state;
    const contactInList = contacts.some(
      item => item.name.toLocaleLowerCase() === contact.name.toLocaleLowerCase()
    );

    contactInList
      ? alert(`${contact.name} is already in contacts!`)
      : this.setState(prevState => ({
          contacts: [contact, ...prevState.contacts],
        }));
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  filterHandler = event => {
    const { name, value } = event.currentTarget;

    this.setState({
      [name]: value,
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
    const { filter } = this.state;
    const filteredContacts = this.contactFiltration();

    return (
      <>
        <Section title="Phonebook">
          <ContactForm onSubmit={this.addContact} />
        </Section>
        <Section title="Contacts">
          <Filter
            filter={filter}
            onChange={this.filterHandler}
            onClick={this.filterReset}
          />
          <ContactsList>
            <ContactItem
              contacts={filteredContacts}
              clickHandler={this.deleteContact}
            />
          </ContactsList>
        </Section>
      </>
    );
  }
}

export default App;
