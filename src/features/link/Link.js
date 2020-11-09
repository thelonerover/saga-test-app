import React from 'react';
import { useDispatch } from 'react-redux';
import { deletePostItem, likePost } from '../ticker/tickerSlice';

const Link = ({ id, url, title }) => {
    const dispatch = useDispatch();

    const handleDelete = (id) => () => dispatch(deletePostItem(id));

    // const handleLike = (id) => dispatch(likePost(id));

    return (
        <li>
            {/* <button onClick={handleLike(id)}>♡</button> */}
            <button onClick={handleDelete(id)}>🗑</button>
            <a href={url} target='_blank' rel='noreferrer'>{title}</a>
        </li>
    );
}

export default Link;