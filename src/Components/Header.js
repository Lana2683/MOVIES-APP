import React from 'react';
import PropTypes from 'prop-types';

export const Header = ({ title, toggleAddMovieModal, setIsSearch, searchedFilm, setSearchedFilm }) => {

    return (
        <div className="header d-column">
            <div className="nav-bar">
                <span className="logo">netflix</span>
                <button className="add-btn border-r outline-none" onClick={toggleAddMovieModal}>
                    + ADD MOVIE
                </button>
            </div>

            <span className="title find-movie">{title.toUpperCase()}</span>
            <div className="search">
                <input type="text" className="border-r outline-none" value={searchedFilm} onChange={e => setSearchedFilm(e.target.value)}/>
                <button className="border-r outline-none" onClick={() => setIsSearch(true)}>SEARCH</button>
            </div>
        </div>
    );
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
    toggleAddMovieModal: PropTypes.func.isRequired,
    films: PropTypes.array,
}

export default Header;
