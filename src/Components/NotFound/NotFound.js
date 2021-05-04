import React from 'react';
import styles from './NotFound.css';
import { NavLink } from 'react-router-dom'

const NotFound = () => (
    <div className={styles.notFound}>
        <h3>Page not found</h3>
        <h1>404</h1>
        <NavLink to='/'>
            <span  className={styles.backBtn}>GO BACK TO HOME</span>
        </NavLink>
    </div>
);
export default NotFound;
