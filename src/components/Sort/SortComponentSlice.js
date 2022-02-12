import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    index: 0
};

export const sortComponentSlice = createSlice({
    name: 'sort',
    initialState,
    reducers: {
        updateSortIndex: (state, action) => {
            state.index = action.payload;
        },
    }
})

export const { updateSortIndex } = sortComponentSlice.actions;

export default sortComponentSlice.reducer;
