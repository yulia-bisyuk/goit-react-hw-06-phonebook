import React from 'react';
import { useDispatch } from 'react-redux';
import { changeFilter } from 'redux/contacts/contactsSlice';
import { FormLabel, FormInput } from '../ContactForm/ContactForm.styled';


const Filter = () => {
  const dispatch = useDispatch();

  const onChange = (e) => {
    dispatch(changeFilter(e.currentTarget.value))
  }

  return (
  <FormLabel>
    Find contacts by name
    <FormInput
      autoComplete="off"
      type="text"
        name="filter"
      onChange={onChange}
      required
    />
  </FormLabel>
)
  
};

export default Filter;