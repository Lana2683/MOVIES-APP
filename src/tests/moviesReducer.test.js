import moviesReducer from '../Reducers/moviesReducer';
import actionTypes from '../Actions/actionTypes';
import { mockedMovies, newMoviesList, sortedMovies, filteredMovies } from './mockedMovies';

const {
    GET_MOVIES,
    GET_MOVIE,
    UPDATE_MOVIE,
    ADD_MOVIE,
    DELETE_MOVIE,
    SORT_MOVIES,
    FILTER_MOVIES,
} = actionTypes;

const initialState = {
    moviesList: [],
}

describe('moviesReducer', () => {
    it('should return the initial state', () => {
        expect(moviesReducer(undefined, {})).toEqual({...initialState, "moviesList": []})
    })

    it('should handle GET_MOVIES', () => {
        const action = {
            type: GET_MOVIES,
            payload: mockedMovies
        };
        expect(moviesReducer(initialState, action)).toEqual({ moviesList: mockedMovies })
    })

    it('should handle GET_MOVIE', () => {
        const action = {
            type: GET_MOVIE,
            payload: mockedMovies[0]
        };
        expect(
            moviesReducer(initialState, action)).toEqual({ movie: mockedMovies[0], ...initialState })
    })

    it('should handle UPDATE_MOVIE', () => {
        const action = {
            type: UPDATE_MOVIE,
            payload: mockedMovies[1]
        };
        expect(moviesReducer({ moviesList: mockedMovies }, action))
            .toEqual({ moviesList: mockedMovies });
    });

    it('should handle ADD_MOVIE', () => {
        const action = {
            type: ADD_MOVIE,
            payload: mockedMovies[2]
        };

        expect(moviesReducer(initialState, action)).toEqual({ moviesList: [mockedMovies[2]] });
    });

    it('should handle DELETE_MOVIE', () => {
        const action = {
            type: DELETE_MOVIE,
            payload: 313369
        };

        expect(moviesReducer({ moviesList: mockedMovies }, action)).toEqual({ moviesList: newMoviesList });
    });

    it('should handle SORT_MOVIES', () => {
        const action = {
            type: SORT_MOVIES,
            payload: 'rating'
        };

        expect(moviesReducer({ moviesList: mockedMovies }, action)).toEqual({
            sortedMoviesList: sortedMovies,
            moviesList: mockedMovies
        });
    });

    it('should handle FILTER_MOVIES', () => {
        const action = {
            type: FILTER_MOVIES,
            payload: 'Drama'
        };

        expect(moviesReducer({ moviesList: mockedMovies }, action)).toEqual({
            moviesList: mockedMovies,
            filteredMoviesList: filteredMovies
        });
    });
 })
