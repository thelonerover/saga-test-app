import React from 'react';
import { useSelector } from 'react-redux';

function Loader() {
  const loading = useSelector(state => state.ticker.loading);

  return (
    <div>
      {loading && <span>Loading</span>}
    </div>
  );
}

export default Loader;