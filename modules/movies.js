import axios from "axios";


const GET_MOVIES = './movies/GET_MOVIES';
const GET_MOVIE = './movies/GET_MOVIE';
const UPDATE_MOVIE = './movies/UPDATE_MOVIE';
const ADD_MOVIE = './movies/ADD_MOVIE';
const DELETE_MOVIE = './movies/DELETE_MOVIE';
const SORT_MOVIES = './movies/SORT_MOVIES';
const FILTER_MOVIES = './movies/FILTER_MOVIES';

const API = 'http://localhost:4000';

// Actions

export const getMovies = () => async dispatch => {
    const res = await axios.get(`${API}/movies/`)
    dispatch({
        type: GET_MOVIES,
        payload: res.data.data
    })
}

export const getMovie = (id) => async dispatch => {
    const res = await axios.get(`${API}/movies/${id}`);
    dispatch({
        type: GET_MOVIE,
        payload: res.data
    })
}

export const updateMovie = (movie) => async dispatch => {
    const res = await axios.put(`${API}/movies`, movie);
    dispatch({
        type: UPDATE_MOVIE,
        payload: res.data
    });
};

export const addMovie = (movie) => async dispatch => {
    const res = await axios.post(`${API}/movies`, movie);
    dispatch({
        type: ADD_MOVIE,
        payload: res.data
    });
}

export const deleteMovie = (id) => async dispatch => {
    await axios.delete(`${API}/movies/${id}`);
    dispatch({
        type: DELETE_MOVIE,
        payload: id
    });
}

export const sortMovies = (item) => (dispatch) => {
    dispatch({
        type: SORT_MOVIES,
        payload: item
    })
}

export const filterMovies = (genre) => (dispatch) => {
    dispatch({
        type: FILTER_MOVIES,
        payload: genre
    })
}

// Initial state

const initialState = {
    moviesList: [],
};

// Reducer

const moviesReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_MOVIES: {
            return {
                ...state,
                moviesList: action.payload,
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
                        return b.vote_count - a.vote_count;
                    }
                })
            }
        }

        case FILTER_MOVIES: {
            const genre = action.payload
            return {
                ...state,
                filteredMoviesList: state.moviesList.filter(movie =>
                    movie.genres.some(it => it === genre)
                )
            }
        }

        default: {
            return state;
        }
    }
};

export default moviesReducer;
