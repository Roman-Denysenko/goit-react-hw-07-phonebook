import { createSelector } from '@reduxjs/toolkit';

const getContacts = state => state.contacts;

const getContactsItems = state => {
    const contacts = getContacts(state);
    return contacts.items;
};

const getLoading = state => {
    const contacts = getContacts(state);
    return contacts.loading;
}

const getFilterValue = state => {
    const contacts = getContacts(state);
    return contacts.filter;
}

const getVisibleContacts =  createSelector(
    [getContactsItems, getFilterValue],
    (items,filter)=>{
    const normalizedFilter = filter.toLowerCase();  
   return( items.filter(el =>
      el.name.toLowerCase().includes(normalizedFilter),
  ))}
)

export default {
    getContacts,
    getContactsItems,
    getLoading,
    getFilterValue,
    getVisibleContacts,
}