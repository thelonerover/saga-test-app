import { createSlice } from '@reduxjs/toolkit';

const initialState = { articleLinks: [] };

export const linkSlice = createSlice({
    name: 'link',
    initialState,
    reducers: {
        deleteArticleLink: (state) => {
            
        }
    }
});

export const { getRandomPosts } = linkSlice.actions;

export default linkSlice.reducer;