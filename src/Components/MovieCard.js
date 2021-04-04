import React from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";

import { useToggle } from './Consts';

import './MovieCard.css';
import { getMovie } from "../Actions/actions";

const MovieCard = ({
     movie,
     toggleEditMovieModal,
     toggleDeleteMovieModal,
     setMovieInfo,
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
        <div className="d-column movie">
            <div className="card" onClick={() => setMovieInfo(movie)} style={{ backgroundImage:  `url('${movie.poster_path}')`}}>
                {isMenuShown ? (
                    <div className="card-menu">
                        <span className="close-modal close-menu" onClick={toggleMenu}>&#x2715;</span>
                        <div className="action-list d-column">
                            <span onClick={() => showEditModal(movie.id)}>Edit</span>
                            <span onClick={() => showDeleteModal(movie.id)}>Delete</span>
                        </div>
                    </div>
                ) : (
                    <span className="kebab-icon" onClick={toggleMenu}>&#8942;</span>
                )}
            </div>
            <div className="description">
                <div className="d-column">
                    <span className="movie-name">{movie.title}</span>
                    <span className="movie-genre">{movie.genres}</span>
                </div>
                <div className="year">{movie.release_date.slice(0, 4)}</div>
            </div>
        </div>
    );
}

MovieCard.prototypes = {
    movie: PropTypes.object.isRequired,
    toggleEditMovieModal: PropTypes.func.isRequired,
    toggleDeleteMovieModal: PropTypes.func.isRequired,
    setMovieInfo: PropTypes.func.isRequired,

    getMovie: PropTypes.func.isRequired,
}

const mapDispatchToProps = {
    getMovie
};

export default connect(() => ({}), mapDispatchToProps)(MovieCard);
