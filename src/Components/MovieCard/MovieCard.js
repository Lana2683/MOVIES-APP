import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import classnames from 'classnames';

import { useToggle } from '../Consts';

import styles from './MovieCard.css';

const MovieCard = ({
     movie,
     toggleEditMovieModal,
     toggleDeleteMovieModal,
     getMovie
    }) => {
    const [isMenuShown, toggleMenu] = useToggle(false);

    const showEditModal = (id) => {
        getMovie(id);
        toggleEditMovieModal();
        toggleMenu();
    }

    const showDeleteModal = (id) => {
        getMovie(id);
        toggleDeleteMovieModal();
        toggleMenu();
    }

    return (
        <div className={classnames(styles.dColumn, styles.movie)}>
            <NavLink to={`/film/${movie.id}`} style={{ backgroundImage:`url('${movie.poster_path}')`}} className={styles.card}>
                {isMenuShown ? (
                    <div className={styles.cardMenu}>
                        <span className={styles.closeMenu} onClick={toggleMenu}>&#x2715;</span>
                        <div className={classnames(styles.actionList,  styles.dColumn)}>
                            <span onClick={() => showEditModal(movie.id)}>Edit</span>
                            <span onClick={() => showDeleteModal(movie.id)}>Delete</span>
                        </div>
                    </div>
                ) : (
                    <span className={styles.kebabIcon} onClick={toggleMenu}>&#8942;</span>
                )}
            </NavLink>
            <div className={styles.description}>
                <div className={styles.dColumn}>
                    <span className={styles.movieName}>{movie.title}</span>
                    <span className={styles.movieGenre}>{movie.genres}</span>
                </div>
                <div className={styles.year}>{movie.release_date.slice(0, 4)}</div>
            </div>
        </div>
    );
}

MovieCard.prototypes = {
    movie: PropTypes.object.isRequired,
    toggleEditMovieModal: PropTypes.func.isRequired,
    toggleDeleteMovieModal: PropTypes.func.isRequired,

    getMovie: PropTypes.func.isRequired,
}

export default MovieCard;
