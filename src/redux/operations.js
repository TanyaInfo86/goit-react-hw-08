// src/redux/operations.js

import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Встановлюємо базову адресу бекенду
axios.defaults.baseURL = "https://68178d2c26a599ae7c3abb91.mockapi.io";

// Завантаження контактів з /contacts
export const fetchContacts = createAsyncThunk(
    'contacts/fetchAll',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get("/contacts");
            return response.data;
        } catch (e) {
            console.log('Fetch error:', e);
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);
