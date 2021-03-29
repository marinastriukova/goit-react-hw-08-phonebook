import { createSelector } from '@reduxjs/toolkit'

const getAllContacts = state => state.contacts.items;

const getFilter = state => state.contacts.filter;

const getLoading = state => state.contacts.loading;

const getVisibleContacts = createSelector(
    [getAllContacts, getFilter],
    (items, filter) => {
        return items.filter(item =>
            item.name.toLowerCase().includes(filter.toLowerCase()))
    }
)

export default {
    getAllContacts,
    getFilter,
    getLoading,
    getVisibleContacts
}