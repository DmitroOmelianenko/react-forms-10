import React, { Component } from "react";
import { nanoid } from "nanoid";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import Filter from "./components/Filter";
import { initialContacts } from "./data/contactData";

class App extends Component {
  state = {
    contacts: initialContacts,
    filter: "",
  };

  addContact = (name, number) => {
    this.setState(prev => ({
      contacts: [...prev.contacts, { id: nanoid(), name, number }]
    }));
  };

  changeFilter = e => this.setState({ filter: e.target.value });

  deleteContact = id => {
    this.setState(prev => ({
      contacts: prev.contacts.filter(c => c.id !== id)
    }));
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(c =>
      c.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  render() {
    const filteredContacts = this.getFilteredContacts();

    return (
      <div style={{ padding: "20px" }}>
        <h1>Phonebook</h1>
        <ContactForm onAdd={this.addContact} />
        <h2>Contacts</h2>
        <Filter value={this.state.filter} onChange={this.changeFilter} />
        <ContactList contacts={filteredContacts} onDelete={this.deleteContact} />
      </div>
    );
  }
}

export default App;
