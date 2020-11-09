import React from 'react';
import { useDispatch } from 'react-redux';
import { deletePostItem } from '../ticker/tickerSlice';

const Link = ({ id, url, title }) => {
    const dispatch = useDispatch();

    const handleDelete = (id) => () => {
        dispatch(deletePostItem(id));
    }

    return (
        <li>
            <button onClick={handleDelete(id)}>🗑</button>
            <a href={url} target='_blank' rel='noreferrer'>{title}</a>
        </li>
    );
}

export default Link;