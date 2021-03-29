import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import actions from './phonebook-actions';

const {
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
} = actions

const items = createReducer([], {
    [fetchItemsSuccess]: (_, {payload}) => payload,
    [addContactSuccess]: (state, { payload }) => [...state, payload],
    [deleteContactSuccess]: (state, { payload }) => state.filter(({ id }) => id !== payload)
})


const filter = createReducer('', {
    [changeFilter]: (_, { payload }) => payload
})


const loading = createReducer(false, {
    [fetchItemsRequest] : () => true,
    [fetchItemsSuccess] : () => false,
    [fetchItemsError] : () => false,
    [addContactRequest] : () => true,
    [addContactSuccess] : () => false,
    [addContactError] : () => false,
    [deleteContactRequest] : () => true,
    [deleteContactSuccess] : () => false,
    [deleteContactError] : () => false,
})

// const error = createReducer(null, {});

export default combineReducers({
    items,
    filter,
    loading
})
