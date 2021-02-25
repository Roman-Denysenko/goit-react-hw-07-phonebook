import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import {
  addContactRequest, addContactSuccess, addContactError,
  deleteContactRequest, deleteContactSuccess, deleteContactError,
  fetchContactsRequest, fetchContactsSuccess, fetchContactsError,
   filter
} from './actions';

const reducerContactsItems = createReducer([], {
  [fetchContactsSuccess]: (_, { payload }) => payload,
    [addContactSuccess]: (state, { payload }) => ([...state, payload]),
    [deleteContactSuccess]: (state, { payload }) => (state.filter(({id}) => id !== payload))   
})

const reducerFilter = createReducer('', {
    [filter]: (_, { payload }) =>payload,   
})

const reducerLoading = createReducer(false, {
  [fetchContactsRequest]: () => true,
  [fetchContactsSuccess]: () => false,
  [fetchContactsError]:()=>false,
  [addContactRequest]:()=> true,
  [addContactSuccess]:()=>  false,
  [addContactError]: () => false,
  [deleteContactRequest]:()=> true,
  [deleteContactSuccess]:()=>  false,
  [deleteContactError]:()=> false,
})

const reducerError= createReducer(null,{})

export default combineReducers({
  items: reducerContactsItems,
  filter: reducerFilter,
  loading: reducerLoading,
  error:reducerError,
});