import React from 'react';
import { useSelector } from 'react-redux';
import Link from './components/Link';
import Tickers from './components/Tickers';

function App() {
  const posts = useSelector(state => state.ticker.posts);
  const loading = useSelector(state => state.ticker.loading);

  return (
    <div>
      <Tickers />
      {loading && <span>Loading</span>}
      <ul className='links'>
        { posts && posts.map(post => <Link key={post.id} {...post} />) }
      </ul>
    </div>
  );
}

export default App;