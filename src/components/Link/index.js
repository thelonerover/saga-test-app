import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deletePostItem, likePost } from '../../features/ticker/tickerSlice';

const Link = ({ id, url, title }) => {
    const post = useSelector(state => state.ticker.posts).find(post => post.id === id);
    const dispatch = useDispatch();

    const handleDelete = (id) => () => {
        dispatch(deletePostItem(id))
    };

    const handleLike = (id) => () => {
        dispatch(likePost(id))
    };

    return (
        <li>
            <button onClick={handleLike(id)}>{post.like ? '♥' : '♡'}</button>
            <button onClick={handleDelete(id)}>🗑</button>
            <a href={url} target='_blank' rel='noreferrer'>{title}</a>
        </li>
    );
}

export default Link;