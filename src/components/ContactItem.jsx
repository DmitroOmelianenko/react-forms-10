import React from "react";
import styled from "styled-components";

const Item = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 10px 12px;
  background: white;
  margin-bottom: 8px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);
`;

const DeleteButton = styled.button`
  background: #e53935;
  color: white;
  border: none;
  padding: 6px 12px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  &:hover {
    background: #c62828;
  }
`;

export default function ContactItem({ id, name, number, onDelete }) {
  return (
    <Item>
      <span>{name}: {number}</span>
      <DeleteButton onClick={() => onDelete(id)}>Delete</DeleteButton>
    </Item>
  );
}
