import React from 'react';
import { useDispatch } from 'react-redux';
import { getRandomPosts } from './tickerSlice';
import styles from './Ticker.module.scss';

const Button = ({ value, subreddit }) => {
    const dispatch = useDispatch();
    const text = value.padStart(200, `${value}-`);
    
    const handleClick = subreddit => () => {
        dispatch(getRandomPosts(subreddit))
    };

    return (
        <span className={styles.ticker} onClick={handleClick(subreddit.toLowerCase())}>{text}</span>
    );
}

export default Button;