import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import Ticker from './features/ticker/Ticker';

function App() {
  return (
    <div className='App'>
      <ul className='tickers'>
        <Ticker value={'frontend'} />
        <Ticker value={'reactjs'} />
        <Ticker value={'vuejs'} />
        <Ticker value={'angular'} />
      </ul>
    </div>
  );
}

export default App;
