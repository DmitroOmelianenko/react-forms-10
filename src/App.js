import React, { Component } from "react";
import { nanoid } from "nanoid";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import Filter from "./components/Filter";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 24px;
  max-width: 420px;
  margin: auto;
  font-family: "Inter", sans-serif;
  background: #f9f9f9;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.08);
`;

const SectionTitle = styled.h2`
  margin-top: 32px;
  margin-bottom: 12px;
  font-size: 22px;
  border-left: 4px solid #4caf50;
  padding-left: 10px;
`;

class App extends Component {
  state = {
    contacts: [],
    filter: "",
  };

  componentDidMount() {
    const saved = localStorage.getItem("contacts");
    if (saved) this.setState({ contacts: JSON.parse(saved) });
  }

  componentDidUpdate(_, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }

  addContact = (name, number) => {
    this.setState(prev => ({
      contacts: [...prev.contacts, { id: nanoid(), name, number }],
    }));
  };

  changeFilter = e => this.setState({ filter: e.target.value });

  deleteContact = id => {
    this.setState(prev => ({
      contacts: prev.contacts.filter(c => c.id !== id),
    }));
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(c =>
      c.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  render() {
    const filtered = this.getFilteredContacts();

    return (
      <Wrapper>
        <h1>Phonebook</h1>
        <ContactForm onAdd={this.addContact} />

        <SectionTitle>Contacts</SectionTitle>
        <Filter value={this.state.filter} onChange={this.changeFilter} />
        <ContactList contacts={filtered} onDelete={this.deleteContact} />
      </Wrapper>
    );
  }
}

export default App;
