import React from 'react';
import { useDispatch } from 'react-redux';
import { deletePostItem } from '../ticker/tickerSlice';

const Link = ({ postId, url }) => {
    const dispatch = useDispatch();

    const handleDelete = (postId) => () => {
        dispatch(deletePostItem(postId));
    }

    return (
        <li>
            <button onClick={handleDelete(postId)}>🗑</button>
            <a href={url} target='_blank'>{url}</a>
        </li>
    );
}

export default Link;