import ContactForm from '../ContactForm';
import Filter from '../Filter';
import ContactList from '../ContactList';
import { useSelector } from 'react-redux';
import { getFilteredContacts } from 'redux/contacts/contactsSelectors';
import { ThemeProvider } from 'styled-components';
import theme from '../../constants/theme';
import {
  Wrapper,
  PhonebookTitle,
  ContactsTitle,
  Section,
  Note,
} from './App.styled';


export const App = () => {

  const filteredContacts = useSelector(getFilteredContacts);

  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <Section>
          <PhonebookTitle>Phonebook</PhonebookTitle>
          <ContactForm/>
        </Section>

        <Section>
          <ContactsTitle>Contacts</ContactsTitle>
          <Filter/>
          
          {filteredContacts.length === 0 ? (
            <Note>No contacts here</Note>
          ) : (
            <ContactList
              contacts={filteredContacts}
            />
          )}
        </Section>
      </Wrapper>
    </ThemeProvider>
  );
};