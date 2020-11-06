import React from 'react';
import './App.css';
import Ticker from './features/ticker/Ticker';

function App() {
  return (
    <div className='App'>
      <ul className='tickers'>
        <Ticker subreddit={'frontend'} />
        <Ticker subreddit={'reactjs'} />
        <Ticker subreddit={'vuejs'} />
        <Ticker subreddit={'angular'} />
      </ul>
    </div>
  );
}

export default App;
