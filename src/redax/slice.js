import { createSlice } from '@reduxjs/toolkit';
import { fetchCampers, fetchOneCamper } from './operation';

const initialStateCampers = {
    items: [],
    camper:{},
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
            .addCase(fetchOneCamper.pending, handlePending)
            .addCase(fetchCampers.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.items = action.payload;
            })
            .addCase(fetchOneCamper.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.camper = action.payload;
            })
            .addCase(fetchCampers.rejected, handleRejected)
            .addCase(fetchOneCamper.rejected, handleRejected)
    }
});

export const { fetchingInProgress, fetchingSuccess, fetchingError } =
    campersSlice.actions;
export const camperReducer = campersSlice.reducer;