import React from 'react';
import Ticker from '../../features/ticker/Ticker';
import styles from './Tickers.module.scss';

function Tickers() {
  return (
    <ul className={styles.list}>
        <li className={styles.listItem}><Ticker value={'frontend'} subreddit={'frontend'} /></li>
        <li className={styles.listItem}><Ticker value={'react.js'} subreddit={'reactjs'} /></li>
        <li className={styles.listItem}><Ticker value={'vue.js'} subreddit={'vuejs'} /></li>
        <li className={styles.listItem}><Ticker value={'angular'} subreddit={'angular'} /></li>
    </ul>
  );
}

export default Tickers;