import React from 'react';
import { useSelector } from 'react-redux';
import Ticker from './features/ticker/Ticker';
import Link from './features/link/Link';

function App() {
  const posts = useSelector(state => state.ticker.posts);

  return (
    <div className='App'>
      <ul className='tickers'>
        <Ticker subreddit={'frontend'} />
        <Ticker subreddit={'reactjs'} />
        <Ticker subreddit={'vuejs'} />
        <Ticker subreddit={'angular'} />
      </ul>
      <ul className='links'>
        { posts && posts.map(post => <Link key={post.id} {...post} />) }
      </ul>
    </div>
  );
}

export default App;