import React from 'react';
import PropTypes from 'prop-types';

export const MovieCard = ({ movie }) =>
    <div className="d-column movie">
        <div className="card"/>
        <div className="description">
            <div className="d-column">
                <span className="movie-name">{movie.name}</span>
                <span className="movie-genre">{movie.genre}</span>
            </div>
            <div className="year">{movie.year}</div>
        </div>
    </div>

MovieCard.prototypes = {
    movie: PropTypes.object.isRequired,
}

export default MovieCard;
