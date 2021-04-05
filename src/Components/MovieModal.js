import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { useFormik } from 'formik';

import { TextInput } from './TextInput';
import { updateMovie, addMovie, deleteMovie } from '../Actions/actions'

const validate = values => {
    const errors = {};
    if (!values.title) {
        errors.title = 'Required';
    } else if (values.title.length > 20) {
        errors.title = 'Must be 20 characters or less';
    }

    if (!values.release_date) {
        errors.release_date = 'Required';
    } else if (!/^([0-9]{2})-([0-9]{2})-([0-9]{4})$/.test(values.release_date)) {
        errors.release_date = 'Date format is DD/MM/YYYY';
    }

    if (!values.poster_path) {
        errors.poster_path = 'Required';
    } else if (!/((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/.test(values.poster_path)) {
        errors.poster_path = 'Invalid poster path';
    }

    if (!values.genres) {
        errors.genres = 'Required';
    } else if (values.genres.length > 20) {
        errors.genres = 'Must be 20 characters or less';
    }

    if (!values.overview) {
        errors.overview = 'Required';
    } else if (values.overview.length > 150) {
        errors.overview = 'Must be 150 characters or less';
    }

    if (!values.runtime) {
        errors.runtime = 'Required';
    } else if (typeof values.runtime !== "number") {
        errors.runtime = 'Only numbers are allowed';
    }
    return errors;
};

const MovieModal = ({ movie, text, isEdit, isDelete, toggleMovieModal, updateMovie, addMovie }) => {
    const form = useFormik({
        initialValues: {
            title: '',
            release_date: '',
            poster_path: '',
            genres: '',
            overview: '',
            runtime: '',
            id: '',
        },
        validate,
        onSubmit: values => {
            isEdit ? updateMovie({...movie, ...values}) : addMovie(values);
            toggleMovieModal();
        },
    });

    useEffect(() => {
        if (isEdit) {
            form.values.title = movie.title;
            form.values.release_date = movie.release_date;
            form.values.poster_path = movie.poster_path;
            form.values.genres = movie.genres;
            form.values.overview = movie.overview;
            form.values.runtime = movie.runtime;
            form.values.id = movie.id;
        }
    }, [movie])

    return (
        <div className="add-modal">
            <form onSubmit={form.handleSubmit} className="modal-content">
                <span className="close-modal font-size-bg" onClick={toggleMovieModal}>&#x2715;</span>
                <ul>
                    <span className="title">{text.toUpperCase()}</span>
                    {isEdit && (
                        <li className="first-input text-input">
                            <span className="label">MOVIE ID</span>
                            <span>{form.values.id}</span>
                        </li>
                    )}
                    {isDelete ? (
                        <li className="first-input">
                            <span>Are you sure you want to delete this movie?</span>
                        </li>
                    ) : (
                        <>
                            <li className={!isEdit ? 'first-input' : ''}>
                                <TextInput
                                    name="title"
                                    title="title"
                                    placeholder="Select Title"
                                    value={form.values.title}
                                    onChange={form.handleChange}
                                />
                                {form.errors.title ? <div>{form.errors.title}</div> : null}
                            </li>
                            <li>
                                <TextInput
                                    name="release_date"
                                    title="release date"
                                    placeholder="Select Date"
                                    value={form.values.release_date}
                                    onChange={form.handleChange}
                                />
                                {form.errors.release_date ? <div>{form.errors.release_date}</div> : null}
                            </li>
                            <li>
                                <TextInput
                                    name="poster_path"
                                    title="movie url"
                                    placeholder="Movie URL here"
                                    value={form.values.poster_path}
                                    onChange={form.handleChange}
                                />
                                {form.errors.poster_path ? <div>{form.errors.poster_path}</div> : null}
                            </li>
                            <li>
                                <TextInput
                                    name="genres"
                                    title="genre"
                                    type="select"
                                    placeholder="Select Genre"
                                    value={form.values.genres}
                                    onChange={form.handleChange}
                                />
                                {form.errors.genres ? <div>{form.errors.genres}</div> : null}
                            </li>
                            <li>
                                <TextInput
                                    name="overview"
                                    title="overview"
                                    type="textarea"
                                    placeholder="Overview here"
                                    value={form.values.overview}
                                    onChange={form.handleChange}
                                />
                                {form.errors.overview ? <div>{form.errors.overview}</div> : null}
                            </li>
                            <li>
                                <TextInput
                                    name="runtime"
                                    title="runtime"
                                    placeholder="Runtime here"
                                    value={form.values.runtime}
                                    onChange={form.handleChange}
                                />
                                {form.errors.runtime ? <div>{form.errors.runtime}</div> : null}
                            </li>
                        </>
                    )}
                </ul>
                <div className="btns-wrapper">
                    {isDelete ? (
                        <button className="sbmt-btn border-r" onClick={deleteMovie(movie.id)}>CONFIRM</button>
                    ) : (
                        <>
                            <button className="rst-btn border-r">RESET</button>
                            <button type="submit" className="sbmt-btn border-r">CONFIRM</button>
                        </>
                    )}
                </div>
            </form>
        </div>
    );
}

MovieModal.prototypes = {
    text: PropTypes.string.isRequired,
    toggleMovieModal: PropTypes.func.isRequired,
    isEdit: PropTypes.bool.isRequired,
    isDelete: PropTypes.bool.isRequired,
    movie: PropTypes.object.isRequired,

    updateMovie: PropTypes.func.isRequired,
    addMovie: PropTypes.func.isRequired,
    deleteMovie: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
    movie: state.movies.movie ? state.movies.movie : {}
});

const mapDispatchToProps = {
    updateMovie,
    addMovie,
    deleteMovie
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieModal);
