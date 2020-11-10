import React from 'react';
import { useSelector } from 'react-redux';
import Link from '../Link';
import styles from './Links.module.scss';

const Links = () => {
    const posts = useSelector(state => state.ticker.posts);

    return (
        <ul className={styles.links}>
            { posts && posts.map(post => <Link key={post.id} {...post} />) }
        </ul>
    );
};

export default Links;