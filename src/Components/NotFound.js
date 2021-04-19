import React from 'react';
import './NotFound.css';
import { NavLink } from 'react-router-dom'

const NotFound = () => (
    <div className="not-found">
        <h3>Page not found</h3>
        <h1>404</h1>
        <NavLink to='/'>
            <span  className="back-btn">GO BACK TO HOME</span>
        </NavLink>
    </div>
);
export default NotFound;
