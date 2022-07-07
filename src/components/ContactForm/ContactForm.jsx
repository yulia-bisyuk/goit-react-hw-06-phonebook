import { useState } from 'react';
import { addItem } from 'redux/contacts/contactsSlice';
import { getContactsValue } from 'redux/contacts/contactsSelectors';
import { useDispatch, useSelector } from 'react-redux';
import { FormLabel, FormInput, AddContactBtn } from './ContactForm.styled';

const ContactForm = () => {
  const [userName, setUserName] = useState('');
  const [userNumber, setUserNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(getContactsValue);

  const handleChange = e => {
    const { name, value } = e.currentTarget;

    name === 'userName' ? setUserName(value) : setUserNumber(value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (contacts.some(contact => contact.name.toLowerCase() === userName.toLowerCase()))
    {
     reset();
     return alert(`${userName} is already in contacts`);
    }
    else {
      dispatch(addItem({userNumber, userName}));
    }
    
    reset();

  };

  const reset = () => {
    setUserName('');
    setUserNumber('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormLabel>
        Name
        <FormInput
          type="text"
          name="userName"
          value={userName}
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </FormLabel>
      <FormLabel>
        Number
        <FormInput
          type="tel"
          name="userNumber"
          value={userNumber}
          onChange={handleChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </FormLabel>
      <AddContactBtn type="submit">Add contact</AddContactBtn>
    </form>
  );
};

export default ContactForm;