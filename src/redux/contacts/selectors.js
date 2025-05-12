import { createSelector } from "@reduxjs/toolkit";
import { selectFilter } from "../filters/selectors";

export const selectContacts = (state) => state.contacts.items;
export const selectLoading = (state) => state.contacts.isLoading;
export const selectError = (state) => state.contacts.error;

export const selectFilteredContacts = createSelector(
    [selectContacts, selectFilter],
    (contacts, searchFilter) => {
        return contacts.filter(
            ({ name, number }) =>
                name.toLowerCase().includes(searchFilter.toLowerCase()) ||
                number.includes(searchFilter)
        );
    }
);