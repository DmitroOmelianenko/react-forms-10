import React from "react";
import styled from "styled-components";

const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 14px;
  font-weight: 600;
`;

const Input = styled.input`
  padding: 10px;
  margin-top: 6px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 15px;
  &:focus {
    border-color: #4caf50;
    box-shadow: 0 0 0 3px rgba(76,175,80,0.2);
  }
`;

export default function Filter({ value, onChange }) {
  return (
    <Label>
      Find contacts
      <Input value={value} onChange={onChange} />
    </Label>
  );
}
