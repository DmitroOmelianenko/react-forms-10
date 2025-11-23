import React from "react";
import ContactItem from "./ContactItem";

function ContactList({ contacts, onDelete }) {
  return (
    <ul>
      {contacts.map((c) => (
        <ContactItem
          key={c.id}
          id={c.id}
          name={c.name}
          number={c.number}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}

export default ContactList;
