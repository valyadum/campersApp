import React from 'react';
import {
  BtnSend,
  FormContainer,
  FormHeader,
  Text,
  UserForm,
} from './Form.styled';

function Form() {
  return (
    <FormContainer>
      <FormHeader>Book your campervan now</FormHeader>
      <Text>Stay connected! We are always ready to help you.</Text>
      <UserForm>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <input type="date" placeholder="Booking date" />
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="Comment"
        ></textarea>
        <BtnSend>Send</BtnSend>
      </UserForm>
    </FormContainer>
  );
}

export default Form;
