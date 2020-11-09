import { createSlice } from '@reduxjs/toolkit';
import { domain } from '../../constants';

const initialState = { posts: [] };

export const tickerSlice = createSlice({
    name: 'ticker',
    initialState,
    reducers: {
        getRandomPosts() {},
        getRandomPostsSuccess(state, action) {
            state.posts = [...state.posts, { url: domain + action.payload.permalink, id: action.payload.id }];
        },
        deletePostItem(state, action) {
            state.posts = state.posts.filter(post => post.id !== action.payload);
        }
    }
});

export const { getRandomPosts, deletePostItem } = tickerSlice.actions;

export default tickerSlice.reducer;