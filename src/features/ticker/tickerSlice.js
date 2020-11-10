import { createSlice } from '@reduxjs/toolkit';

const initialState = { posts: [], loading: false };

let idIndex = 0;

export const tickerSlice = createSlice({
    name: 'ticker',
    initialState,
    reducers: {
        getRandomPosts(state) {
            state.loading = true;
        },
        getRandomPostsSuccess(state, action) {
            if (state.posts.find(post => post.id === action.payload.id)) {
                state.posts = [...state.posts, { ...action.payload, id: action.payload.id + idIndex++, like: false }];
            } else {
                state.posts = [...state.posts, { ...action.payload, like: false }];
            }

            state.loading = false;
        },
        getRandomPostsFailure(state) {
            state.loading = false;
        },
        deletePostItem(state, action) {
            state.posts = state.posts.filter(post => post.id !== action.payload);
        },
        likePost(state, action) {
            state.posts = state.posts.map(post => {
                if (post.id === action.payload) {
                    post.like = !post.like;
                }

                return post;
            });
        }
    }
});

export const { getRandomPosts, deletePostItem, likePost } = tickerSlice.actions;

export default tickerSlice.reducer;