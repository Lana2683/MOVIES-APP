import actionTypes from '../Actions/actionTypes';

const initialState = {
    moviesList: []
}

const {
    GET_MOVIES,
    GET_MOVIE,
    UPDATE_MOVIE,
    ADD_MOVIE,
    DELETE_MOVIE,
    SORT_MOVIES,
    FILTER_MOVIES,
} = actionTypes;
const moviesReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_MOVIES: {
            return {
                ...state,
                moviesList: action.payload
            };
        }

        case GET_MOVIE: {
            return {
                ...state,
                movie: action.payload
            };
        }

        case UPDATE_MOVIE: {
            return {
                ...state,
                moviesList: state.moviesList.map(movie =>
                    movie.id === action.payload.id
                        ? action.payload : movie)
            };
        }

        case ADD_MOVIE: {
            return {
                ...state,
                moviesList: [action.payload, ...state.moviesList]
            };
        }

        case DELETE_MOVIE: {
            return {
                ...state,
                moviesList: state.moviesList.filter(movie =>
                    movie.id !== action.payload)
            }
        }

        case SORT_MOVIES: {
            const sort = action.payload
            return {
                ...state,
                sortedMoviesList: state.moviesList.sort((a, b) => {
                    if (sort === 'release_date') {
                        return Date.parse(new Date(b.release_date).toString()) - Date.parse(new Date(a.release_date).toString());
                    }
                    if (sort === 'rating') {
                        return b.vote_average - a.vote_average;
                    }
                })
            }
        }

        case FILTER_MOVIES: {
            const genre = action.payload
            return {
                ...state,
                filteredMoviesList: state.moviesList.filter(movie =>
                    movie.genre.some(it => it === genre)
                )
            }
        }

        default: {
            return state;
        }
    }
};

export default moviesReducer;
