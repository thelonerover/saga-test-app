import React from 'react';
import Ticker from '../../features/ticker/Ticker';
import styles from './Tickers.module.scss';

function Tickers() {
  return (
    <ul className={styles.list}>
        <li><Ticker subreddit={'frontend'} /></li>
        <li><Ticker subreddit={'reactjs'} /></li>
        <li><Ticker subreddit={'vuejs'} /></li>
        <li><Ticker subreddit={'angular'} /></li>
    </ul>
  );
}

export default Tickers;