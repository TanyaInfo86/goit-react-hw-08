import { createSlice } from "@reduxjs/toolkit";
import { addContact, changeContact, deleteContact, fetchContacts } from "./operations";
import { logOut } from "../auth/operations";

const handlePending = (state) => {
    state.isLoading = true;
};

const handleRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
};

const contactsSlice = createSlice({
    name: "contacts",
    initialState: {
        items: [],
        isLoading: false,
        error: null,
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchContacts.pending, handlePending)
            .addCase(fetchContacts.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.items = action.payload;
            })
            .addCase(fetchContacts.rejected, handleRejected)
            .addCase(addContact.pending, handlePending)
            .addCase(addContact.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.items.push(action.payload);
            })
            .addCase(addContact.rejected, handleRejected)
            .addCase(deleteContact.pending, handlePending)
            .addCase(deleteContact.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.items = state.items.filter(
                    (item) => item.id !== action.payload.id
                );
            })
            .addCase(deleteContact.rejected, handleRejected)
            .addCase(logOut.fulfilled, (state) => {
                state.items = [];
                state.error = null;
                state.isLoading = false;
            })
            .addCase(changeContact.pending, handlePending)
            .addCase(changeContact.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.items = state.items.map((item) =>
                    item.id === action.payload.id ? action.payload : item
                );
            })
            .addCase(changeContact.rejected, handleRejected)
    },
});

export const contactsReducer = contactsSlice.reducer;