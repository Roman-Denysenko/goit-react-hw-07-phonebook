import axios from 'axios';
import {
    addContactRequest, addContactSuccess,
    addContactError, deleteContactRequest,
    deleteContactSuccess, deleteContactError,
    fetchContactsRequest, fetchContactsSuccess,
    fetchContactsError
} from './actions';

axios.defaults.baseURL = 'http://localhost:1313/';

export const fetchContacts = () => dispatch => {
    dispatch(fetchContactsRequest());

    axios
        .get('/contacts')
        .then(({ data }) => dispatch(fetchContactsSuccess(data)))
        .catch(error=>dispatch(fetchContactsError(error)))
    
}

export const addContact = (item) => dispatch => {
 
    dispatch(addContactRequest());

    axios
        .post('/contacts', item)
        .then(({data})=> dispatch(addContactSuccess(data)))
        .catch(error => dispatch(addContactError(error)) )
}

export const deleteContact = (id) => dispatch => {
    dispatch(deleteContactRequest());

    axios
        .delete(`/contacts/${id}`)
        .then(()=> dispatch(deleteContactSuccess(id)))
        .catch(error=>dispatch(deleteContactError(error)))
}

