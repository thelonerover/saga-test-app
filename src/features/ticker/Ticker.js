import React from 'react';
import { useDispatch } from 'react-redux';
import { getRandomPosts } from './tickerSlice';
import styles from './Ticker.module.scss';

const Button = ({ subreddit }) => {
    const dispatch = useDispatch();
    
    const handleClick = subreddit => () => {
        dispatch(getRandomPosts(subreddit))
    };

    return (
        <button className={styles.ticker} onClick={handleClick(subreddit.toLowerCase())}>{subreddit}</button>
    );
}

export default Button;