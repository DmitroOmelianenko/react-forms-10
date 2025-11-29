import React from "react";
import styled from "styled-components";
import ContactItem from "./ContactItem";

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 12px;
`;

export default function ContactList({ contacts, onDelete }) {
  return (
    <List>
      {contacts.map(c => (
        <ContactItem key={c.id} {...c} onDelete={onDelete} />
      ))}
    </List>
  );
}
