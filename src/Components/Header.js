import React from 'react';
import PropTypes from 'prop-types';

import Search from './Search';

export const Header = ({ title }) =>
    <div className="header">
        <button className="add-btn border-r outline-none">+ ADD MOVIE</button>
        <span className="title">{title.toUpperCase()}</span>
        <Search/>
    </div>

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header;
