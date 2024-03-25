import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";



export const fetchCampers = createAsyncThunk(
    "campers/fetchAll",
    async (page, thunkAPI) => {

        const url = new URL('https://65fa96843909a9a65b1ace0a.mockapi.io/campers');
        url.searchParams.append('page',page ); 
        url.searchParams.append('limit', 4);
        axios.defaults.baseURL = url.href;
        try {
            const response = await axios.get("");
            // При успішному запиті повертаємо проміс із даними
            return response.data;
        } catch (e) {
            // При помилці запиту повертаємо проміс
            // який буде відхилений з текстом помилки
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);
export const fetchOneCamper = createAsyncThunk(
    "camper/fetchAOne",
    async (id, thunkAPI) => {

        axios.defaults.baseURL ='https://65fa96843909a9a65b1ace0a.mockapi.io';
        try {
            const response = await axios.get(`/campers/${id}`);
            // При успішному запиті повертаємо проміс із даними
            return response.data;
        } catch (e) {
            // При помилці запиту повертаємо проміс
            // який буде відхилений з текстом помилки
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);
export const addToFavorite = createAsyncThunk(
    "camper/addToFavorite",
    async (setFavorite,id, thunkAPI) => {

        axios.defaults.baseURL = 'https://65fa96843909a9a65b1ace0a.mockapi.io';
        try {
            const response = await axios.patch(`/campers/${id}/`);
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);
