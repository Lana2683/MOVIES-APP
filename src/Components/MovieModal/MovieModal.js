import React from 'react';
import PropTypes from 'prop-types';
import { useFormik } from 'formik';
import * as Yup from 'yup';

export const MovieModal = ({ movie, text, isEdit, isDelete, toggleMovieModal, updateMovie, addMovie }) => {
    const form = useFormik({
        enableReinitialize: true,
        initialValues: {
            title: isEdit ? movie.title : '',
            release_date: isEdit ? movie.release_date : '',
            poster_path: isEdit ? movie.poster_path : '',
            genres: isEdit ? movie.genres : [],
            overview: isEdit ? movie.overview : '',
            runtime: isEdit ? movie.runtime : '',
        },
        validationSchema: Yup.object({
                title: Yup.string()
                    .min(2, 'Must be from 2 to 20 characters')
                    .max(20, 'Must be from 2 to 20 characters')
                    .required('Required'),
                release_date: Yup.date()
                    .max(new Date(), 'Date must be earlier than now')
                    .required('Required'),
                poster_path: Yup.string()
                    .matches(
                        /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
                        'Enter correct url!'
                    ),
                genres: Yup.string()
                    .max(20, 'Must be 20 characters or less')
                    .required('Required'),
                overview: Yup.string()
                    .max(250, 'Must be 250 characters or less')
                    .required('Required'),
                runtime: Yup.number()
                    .required('Required'),
            }),
        onSubmit: values => {
            isEdit ? updateMovie({...movie, ...values}) : addMovie(values);
            toggleMovieModal();
        },
    });

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
                                <div className="text-input">
                                    <label htmlFor="title" className="label">TITLE</label>
                                    <input
                                        id="title"
                                        name="title"
                                        placeholder="Select Title"
                                        value={form.values.title}
                                        onChange={form.handleChange}
                                        className="input"
                                    />
                                    {form.touched.title && form.errors.title ? (
                                        <div>{form.errors.title}</div>
                                    ) : null}
                                </div>
                            </li>
                            <li>
                                <div className="text-input">
                                    <label htmlFor="release_date" className="label">RELEASE DATE</label>
                                    <input
                                        id="release_date"
                                        name="release_date"
                                        placeholder="Select Date"
                                        value={form.values.release_date}
                                        onChange={form.handleChange}
                                        className="input"
                                    />
                                    {form.touched.release_date && form.errors.release_date ? (
                                        <div>{form.errors.release_date}</div>
                                    ) : null}
                                </div>
                            </li>
                            <li>
                                <div className="text-input">
                                    <label htmlFor="poster_path" className="label">MOVIE URL</label>
                                    <input
                                        id="poster_path"
                                        name="poster_path"
                                        placeholder="Movie URL here"
                                        value={form.values.poster_path}
                                        onChange={form.handleChange}
                                        className="input"
                                    />
                                    {form.touched.poster_path && form.errors.poster_path ? (
                                        <div>{form.errors.poster_path}</div>
                                    ) : null}
                                </div>
                            </li>
                            <li>
                                <div className="text-input">
                                    <label htmlFor="genres" className="label">GENRE</label>
                                    <input
                                        id="genres"
                                        name="genres"
                                        type="select"
                                        placeholder="Select Genre"
                                        value={form.values.genres}
                                        onChange={form.handleChange}
                                        className="input"
                                    />
                                    {form.touched.genres && form.errors.genres ? (
                                        <div>{form.errors.genres}</div>
                                    ) : null}
                                </div>
                            </li>
                            <li>
                                <div className="text-input">
                                    <label htmlFor="overview" className="label">OVERVIEW</label>
                                    <textarea
                                        id="overview"
                                        name="overview"
                                        placeholder="Overview here"
                                        value={form.values.overview}
                                        onChange={form.handleChange}
                                        className="input"
                                    />
                                    {form.touched.overview && form.errors.overview ? (
                                        <div>{form.errors.overview}</div>
                                    ) : null}
                                </div>
                            </li>
                            <li>
                                <div className="text-input">
                                    <label htmlFor="runtime" className="label">RUNTIME</label>
                                    <input
                                        id="runtime"
                                        name="runtime"
                                        placeholder="Runtime here"
                                        value={form.values.runtime.toString()}
                                        onChange={form.handleChange}
                                        className="input"
                                    />
                                    {form.touched.runtime && form.errors.runtime ? (
                                        <div>{form.errors.runtime}</div>
                                    ) : null}
                                </div>
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
    movie:PropTypes.arrayOf(PropTypes.shape({})),

    updateMovie: PropTypes.func.isRequired,
    addMovie: PropTypes.func.isRequired,
    deleteMovie: PropTypes.func.isRequired
}

export default MovieModal;
