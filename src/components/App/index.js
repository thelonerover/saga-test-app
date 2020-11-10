import React from 'react';
import Tickers from '../Tickers';
import Links from '../Links';
import Loader from '../Loader';

function App() {
  return (
    <div>
      <Tickers />
        <Links />
      <Loader />
    </div>
  );
}

export default App;