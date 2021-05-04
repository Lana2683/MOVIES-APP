import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';

import Main from '../Main/Main';

import styles from './MovieInfo.css';

const MovieInfo = ({ getMovie, movie, closeMovieInfo }) => {
    const { id } = useParams();
    useEffect(() => {
        if (movie) {
            getMovie(Number(id))
        }
    }, [])

    return (
        <div className={styles.container}>
            <div className={styles.movieInfoContainer}>
                <div className={styles.navBar}>
                    <span className={styles.logo}>netflix</span>
                    <span className={styles.searchIcon} onClick={() => closeMovieInfo(false)}>&#x2315;</span>
                </div>

                <div className={styles.movieInfo}>
                    <div className={styles.movieImg} style={{backgroundImage: `url('${movie.poster_path}')`}}/>
                    <div className={styles.dColumn}>
                        <span>{movie.title}</span>
                        <span>{movie.genres}</span>
                        <span>{movie.release_date}</span>
                        <span className={styles.movieInfoDescription}>{movie.overview}</span>
                    </div>
                </div>
            </div>
            <Main/>
        </div>
    )
}

MovieInfo.propTypes = {
    closeMovieInfo: PropTypes.func.isRequired,
    movie: PropTypes.arrayOf(PropTypes.shape({})),
};

export default MovieInfo;
