import React from 'react';
import { useSelector } from 'react-redux';
import Tickers from '../Tickers';
import Links from '../Links';

function App() {
  const loading = useSelector(state => state.ticker.loading);

  return (
    <div>
      <Tickers />
      {loading && <span>Loading</span>}
      <Links />
    </div>
  );
}

export default App;