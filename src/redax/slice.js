import { createSlice } from '@reduxjs/toolkit';
import { fetchCampers } from './operation';

const initialStateCampers = {
    items: [],
    isLoading: false,
    error: null,
};

const handlePending = state => {
    state.isLoading = true;
};

const handleRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
};

const campersSlice = createSlice({
    name: 'campers',
    initialState: initialStateCampers,
    extraReducers: builder => {
        builder
            .addCase(fetchCampers.pending, handlePending)
            .addCase(fetchCampers.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.items = action.payload;
            })
            .addCase(fetchCampers.rejected, handleRejected)
    }
});

export const { fetchingInProgress, fetchingSuccess, fetchingError } =
   campersSlice.actions;
export const camperReducer = campersSlice.reducer;