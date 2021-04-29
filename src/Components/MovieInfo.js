import React, { useEffect } from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';

import { getMovie } from "../Actions/actions";
import Main from './Main';

import './MovieInfo.css';

const MovieInfo = ({ getMovie, movie, closeMovieInfo }) => {
    const { id } = useParams();
    useEffect(() => {
        if (movie) {
            getMovie(Number(id))
        }
    }, [])

    return (
        <div className='container'>
            <div className="movie-info-container">
                <div className="nav-bar">
                    <span className="logo">netflix</span>
                    <span className="search-icon" onClick={() => closeMovieInfo(false)}>&#x2315;</span>
                </div>

                <div className="movie-info">
                    <div className="movie-img" style={{backgroundImage: `url('${movie.poster_path}')`}}/>
                    <div className="d-column movie-info-block">
                        <span className="movie-info-name">{movie.title}</span>
                        <span className="movie-info-genre">{movie.genres}</span>
                        <span className="movie-info-year">{movie.release_date}</span>
                        <span className="movie-info-description">{movie.overview}</span>
                    </div>
                </div>
            </div>
            <Main/>
        </div>
    )
}

MovieInfo.propTypes = {
    closeMovieInfo: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
    movie: state.movies.movie || {},
});

const mapDispatchToProps = {
    getMovie
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieInfo);
