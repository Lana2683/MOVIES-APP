import React from 'react';
import PropTypes from 'prop-types';

import { useToggle } from './Consts';

import './MovieCard.css';

export const MovieCard = ({
     movie,
     toggleEditMovieModal,
     toggleDeleteMovieModal,
     setMovieInfo,
    }) => {
    const [isMenuShown, toggleMenu] = useToggle(false);

    const showEditModal = () => {
        toggleEditMovieModal();
        toggleMenu()
    }

    const showDeleteModal = () => {
        toggleDeleteMovieModal();
        toggleMenu();
    }

    return (
        <div className="d-column movie">
            <div className="card" onClick={() => setMovieInfo(movie)}>
                {isMenuShown ? (
                    <div className="card-menu">
                        <span className="close-modal close-menu" onClick={toggleMenu}>&#x2715;</span>
                        <div className="action-list d-column">
                            <span onClick={showEditModal}>Edit</span>
                            <span onClick={showDeleteModal}>Delete</span>
                        </div>
                    </div>
                ) : (
                    <span className="kebab-icon" onClick={toggleMenu}>&#8942;</span>
                )}
            </div>
            <div className="description">
                <div className="d-column">
                    <span className="movie-name">{movie.name}</span>
                    <span className="movie-genre">{movie.genre}</span>
                </div>
                <div className="year">{movie.year}</div>
            </div>
        </div>
    );
}

MovieCard.prototypes = {
    movie: PropTypes.object.isRequired,
    toggleEditMovieModal: PropTypes.func.isRequired,
    toggleDeleteMovieModal: PropTypes.func.isRequired,
    useToggle: PropTypes.func.isRequired,
    setMovieInfo: PropTypes.func.isRequired,
}

export default MovieCard;
