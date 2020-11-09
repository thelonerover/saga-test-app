import { createSlice } from '@reduxjs/toolkit';
import { domain } from '../../constants';

const initialState = { posts: [] };

let idIndex = 0;

export const tickerSlice = createSlice({
    name: 'ticker',
    initialState,
    reducers: {
        getRandomPosts() {},
        getRandomPostsSuccess(state, action) {
            if (state.posts.find(post => post.id === action.payload.id)) {
                state.posts = [...state.posts, { ...action.payload, id: action.payload.id + idIndex++ }];
            } else {
                state.posts = [...state.posts, { ...action.payload }];
            }
        },
        deletePostItem(state, action) {
            state.posts = state.posts.filter(post => post.id !== action.payload);
        },
        likePost(state, action) {
            state.posts = state.posts.map(post => {
                console.log(post);
                // if (post.id === action.payload) {
                //     post.id = !post.id
                // }
            });
        }
    }
});

export const { getRandomPosts, deletePostItem, likePost } = tickerSlice.actions;

export default tickerSlice.reducer;