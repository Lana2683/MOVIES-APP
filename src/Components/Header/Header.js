import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from "../Homepage/Homepage.css";


export const Header = ({ title, toggleAddMovieModal, setIsSearch, searchedFilm, setSearchedFilm }) => {

    return (
        <div className={classnames(styles.header, styles.dColumn)}>
            <div className={styles.navBar}>
                <span className={styles.logo}>netflix</span>
                <button className={classnames(styles.addBtn, styles.borderR, styles.outlineNone)} onClick={toggleAddMovieModal}>
                    + ADD MOVIE
                </button>
            </div>

            <span className={classnames(styles.title, styles.findMovie)}>{title.toUpperCase()}</span>
            <div className={styles.search}>
                <input type="text" className={classnames(styles.borderR, styles.outlineNone)} value={searchedFilm} onChange={e => setSearchedFilm(e.target.value)}/>
                <button className={classnames(styles.borderR, styles.outlineNone)} onClick={() => setIsSearch(true)}>SEARCH</button>
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
