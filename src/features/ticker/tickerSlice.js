import { createSlice } from '@reduxjs/toolkit';

const initialState = { articleLinks: [] };

export const tickerSlice = createSlice({
    name: 'ticker',
    initialState,
    reducers: {
        getRandomArticle(state, action) {
            state.articleLinks = [...state.articleLinks, action.payload]
        }
    }
});

export const { getRandomArticle } = tickerSlice.actions;

export default tickerSlice.reducer;