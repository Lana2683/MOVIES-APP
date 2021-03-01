import React from 'react';
import PropTypes from 'prop-types';

import MovieCard from './MovieCard';

export const MovieList = ({ movies }) =>
    <div className="movie-list">
        {movies.map(movie =>
            <MovieCard key={movie.id} movie={movie}/>
        )}
    </div>

MovieList.proptypes = {
    movies: PropTypes.array.isRequired,
}

export default MovieList;
