import axios from 'axios';
import actionTypes from '../Actions/actionTypes';
import 'regenerator-runtime/runtime'

const {
    GET_MOVIES,
    GET_MOVIE,
    UPDATE_MOVIE,
    ADD_MOVIE,
    DELETE_MOVIE,
    SORT_MOVIES,
    FILTER_MOVIES,
} = actionTypes;

const API = 'http://localhost:4000'

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


