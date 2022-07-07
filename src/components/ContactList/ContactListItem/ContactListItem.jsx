import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { ImCancelCircle } from 'react-icons/im';
import { IconContext } from "react-icons";
import { deleteItem } from 'redux/contacts/contactsSlice';
import { DeleteButton, LiItem} from './ContactListItem.styled';

const ContactListItem = ({ id, name, number }) => {
    const dispatch = useDispatch();

    return (
        <LiItem
            id={id}
            key={id}>
            {name}: {number}
            <IconContext.Provider value={{ color: "#bc2525", size: "18px" }}>
                <DeleteButton type='button'
                    onClick={() => dispatch(deleteItem(id))}>
                    <ImCancelCircle />
                </DeleteButton>
            </IconContext.Provider>
        </LiItem>
    )
    
};

ContactListItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
}

export default ContactListItem;