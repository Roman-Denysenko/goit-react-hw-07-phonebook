import { createAction } from '@reduxjs/toolkit';

export const fetchContactsRequest = createAction('fetchContactsRequest');
export const fetchContactsSuccess = createAction('fetchContactsSuccess');
export const fetchContactsError = createAction('fetchContactsError');



export const addContactRequest = createAction('addContactRequest');
export const addContactSuccess  = createAction('addContactSuccess');
export const addContactError = createAction('addContactError');

export const deleteContactRequest = createAction('deleteContactRequest');
export const deleteContactSuccess  = createAction('deleteContactSuccess');
export const deleteContactError = createAction('deleteContactError');

export const filter = createAction('filterContacts');
