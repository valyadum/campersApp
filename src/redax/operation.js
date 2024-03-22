import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://65fa96843909a9a65b1ace0a.mockapi.io";

export const fetchCampers = createAsyncThunk(
    "campers/fetchAll",
    async (_, thunkAPI) => {
        try {
            const response = await axios.get("/campers/campers");
            // При успішному запиті повертаємо проміс із даними
            return response.data;
        } catch (e) {
            // При помилці запиту повертаємо проміс
            // який буде відхилений з текстом помилки
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);