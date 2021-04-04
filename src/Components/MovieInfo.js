import React from 'react';
import PropTypes from 'prop-types';

import './MovieInfo.css';

export const MovieInfo = ({ movie, closeMovieInfo }) => (
    <div className="movie-info-container">
        <div className="nav-bar">
            <span className="logo">netflix</span>
            <span className="search-icon" onClick={() => closeMovieInfo(false)}>&#x2315;</span>
        </div>

        <div className="movie-info">
            <div className="movie-img" style={{ backgroundImage:  `url('${movie.poster_path}')`}}/>
            <div className="d-column movie-info-block">
                <span className="movie-info-name">{movie.title}</span>
                <span className="movie-info-genre">{movie.genres}</span>
                <span className="movie-info-year">{movie.release_date}</span>
                <span className="movie-info-description">{movie.overview}</span>
            </div>
        </div>
    </div>
)

MovieInfo.propTypes = {
    movie: PropTypes.object.isRequired,
    closeMovieInfo: PropTypes.func.isRequired,
}

export default MovieInfo;
