import React, { Component } from "react";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 18px;
  padding: 16px;
  background: white;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.06);
`;

const Label = styled.label`
  font-size: 15px;
  display: flex;
  flex-direction: column;
  font-weight: 600;
`;

const Input = styled.input`
  padding: 10px;
  margin-top: 6px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 15px;
  transition: 0.2s;
  &:focus {
    border-color: #4caf50;
    box-shadow: 0 0 0 3px rgba(76,175,80,0.2);
  }
`;

const Button = styled.button`
  padding: 12px;
  background: #4caf50;
  color: white;
  font-weight: 600;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: 0.2s;
  &:hover { background: #45a049; }
`;

class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  handleSubmit = e => {
    e.preventDefault();
    this.props.onAdd(this.state.name, this.state.number);
    this.setState({ name: "", number: "" });
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Label>
          Name
          <Input
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            required
          />
        </Label>

        <Label>
          Number
          <Input
            name="number"
            value={this.state.number}
            onChange={this.handleChange}
            required
          />
        </Label>

        <Button type="submit">Add contact</Button>
      </Form>
    );
  }
}

export default ContactForm;
