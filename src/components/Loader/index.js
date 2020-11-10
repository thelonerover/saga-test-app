import React from 'react';
import { useSelector } from 'react-redux';
import styles from './Loader.module.scss';

function Loader() {
  const loading = useSelector(state => state.ticker.loading);

  return (
    <div>
      {loading && <span className={styles.loader}>Loading</span>}
    </div>
  );
}

export default Loader;