import React from 'react';
import PropTypes from 'prop-types';
import ContactListItem from './ContactListItem/ContactListItem';
import { List } from './ContactList.styled';

const ContactList = ({contacts}) => (
    <List>
        {contacts.map(({ id, name, number }) => (
            <ContactListItem
                key={id}
                id={id}
                name={name}
                number={number}
            / >
        ))}
    </List>
)

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default ContactList;