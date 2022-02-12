import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { createAds, deleteAds, fetchAds, generateRandomAds } from './advertisementAPI';

const initialState = {
    value: [],
    status: 'idle',
  };

export const fetchAdsAsync = createAsyncThunk(
    'ads/get',
    async () => {
        const response = await fetchAds();
        return response.data;
    }
);

export const createAdsAsync = createAsyncThunk(
    'ads/create',
    async (data) => {
        const response = await createAds(data);
        return response.data;
    }
);

export const deleteAdsAsync = createAsyncThunk(
    'ads/delete',
    async () => {
        const response = await deleteAds();
        return response.data;
    }
);

export const generateRandomAsync = createAsyncThunk(
    'ads/random',
    async () => {
        const response = await generateRandomAds();
        return response.data;
    }
);

export const advertisementSlice = createSlice({
    name: 'advertisement',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchAdsAsync.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(fetchAdsAsync.fulfilled, (state, action) => {
            state.status = 'idle';
            state.value = action.payload.result;
        })
    }
})

export const {  } = advertisementSlice.actions;

export const selectAds = (state) => state.advertisement.value;

export default advertisementSlice.reducer;
