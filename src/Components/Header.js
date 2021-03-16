import React from 'react';
import PropTypes from 'prop-types';

import Search from './Search';

export const Header = ({ title, toggleAddMovieModal }) => (
    <div className="header d-column">
        <div className="nav-bar">
            <span className="logo">netflix</span>
            <button className="add-btn border-r outline-none" onClick={toggleAddMovieModal}>
                + ADD MOVIE
            </button>
        </div>

        <span className="title find-movie">{title.toUpperCase()}</span>
        <Search/>
    </div>
);

Header.propTypes = {
    title: PropTypes.string.isRequired,
    toggleAddMovieModal: PropTypes.func.isRequired,
}

export default Header;
