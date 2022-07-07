import { createSelector } from '@reduxjs/toolkit';

export const getFilterValue = state => state.contacts.filter;
export const getContactsValue = state => state.contacts.items;

export const getFilteredContacts = createSelector(
  getFilterValue,
  getContactsValue,
  (filter, contacts) =>
    contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    )
);
