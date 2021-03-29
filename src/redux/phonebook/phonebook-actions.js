// import { v4 as uuidv4 } from 'uuid';
import { createAction } from '@reduxjs/toolkit'


const fetchItemsRequest = createAction('phonebook/fetchItemsRequest');
const fetchItemsSuccess = createAction('phonebook/fetchItemsSuccess');
const fetchItemsError = createAction('phonebook/fetchItemsError');


const addContactRequest = createAction('phonebook/addContactRequest');
const addContactSuccess = createAction('phonebook/addContactSuccess');
const addContactError = createAction('phonebook/addContactError');


const deleteContactRequest = createAction('phonebook/deleteContactRequest');
const deleteContactSuccess = createAction('phonebook/deleteContactSuccess');
const deleteContactError = createAction('phonebook/deleteContactError');


const changeFilter = createAction('phonebook/changeFilter');

export default {
    fetchItemsRequest,
    fetchItemsSuccess,
    fetchItemsError,
    addContactRequest,
    addContactSuccess,
    addContactError,
    deleteContactRequest,
    deleteContactSuccess,
    deleteContactError,
    changeFilter
}
