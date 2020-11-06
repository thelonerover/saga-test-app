import React from 'react';
import { useDispatch } from 'react-redux';
import { getRandomArticle } from './tickerSlice';


const Button = ({ subreddit }) => {
    const dispatch = useDispatch();
    
    const handleClick = subreddit => () => {
        dispatch(getRandomArticle(subreddit));
    }

    return (
        <button onClick={handleClick(subreddit.toLowerCase())}>{subreddit}</button>
    );
}

export default Button;