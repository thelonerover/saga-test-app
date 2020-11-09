import React from 'react';
import { useDispatch } from 'react-redux';
import { getRandomPosts } from './tickerSlice';


const Button = ({ subreddit }) => {
    const dispatch = useDispatch();
    
    const handleClick = subreddit => () => dispatch(getRandomPosts(subreddit));

    return (
        <button onClick={handleClick(subreddit.toLowerCase())}>{subreddit}</button>
    );
}

export default Button;