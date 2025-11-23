import React from "react";

function ContactItem({ id, name, number, onDelete }) {
  return (
    <li>
      {name}: {number}{" "}
      <button onClick={() => onDelete(id)}>Delete</button>
    </li>
  );
}

export default ContactItem;
