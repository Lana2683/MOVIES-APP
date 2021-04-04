import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";

import { TextInput } from './TextInput';
import { updateMovie, addMovie, deleteMovie } from '../Actions/actions'

const MovieModal = ({ movie, text, isEdit, isDelete, toggleMovieModal, updateMovie, addMovie }) => {
    const [title, setTitle] = useState('');
    const [release_date, setRelease_date] = useState('');
    const [poster_path, setPoster_path] = useState('');
    const [genres, setGenres] = useState('');
    const [overview, setOverview] = useState('');
    const [runtime, setRuntime] = useState('');
    const [id, setMovieId] = useState(null);

    useEffect(() => {
        if (isEdit) {
            setTitle(movie.title);
            setRelease_date(movie.release_date);
            setPoster_path(movie.poster_path);
            setGenres(movie.genres);
            setOverview(movie.overview);
            setRuntime(movie.runtime);
            setMovieId(movie.id)
        }
    }, [movie])

    const onConfirm = () => {
        const newMovie = {
            id,
            title,
            release_date,
            poster_path,
            genres,
            overview,
            runtime,
        };
        const updatedMovie = {
            ...movie,
            ...newMovie
        };
        isEdit ? updateMovie(updatedMovie) : addMovie(newMovie);
        toggleMovieModal()
    }

    return (
        <div className="add-modal">
            <div className="modal-content">
                <span className="close-modal font-size-bg" onClick={toggleMovieModal}>&#x2715;</span>
                <ul>
                    <span className="title">{text.toUpperCase()}</span>
                    {isEdit && (
                        <li className="first-input text-input">
                            <span className="label">MOVIE ID</span>
                            <span>{id}</span>
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
                                    value={title}
                                    onChange={setTitle}
                                />
                            </li>
                            <li>
                                <TextInput
                                    name="release_date"
                                    title="release date"
                                    placeholder="Select Date"
                                    value={release_date}
                                    onChange={setRelease_date}
                                />
                            </li>
                            <li>
                                <TextInput
                                    name="poster_path"
                                    title="movie url"
                                    placeholder="Movie URL here"
                                    value={poster_path}
                                    onChange={setPoster_path}
                                />
                            </li>
                            <li>
                                <TextInput
                                    name="genres"
                                    title="genre"
                                    type="select"
                                    placeholder="Select Genre"
                                    value={genres}
                                    onChange={setGenres}
                                />
                            </li>
                            <li>
                                <TextInput
                                    name="overview"
                                    title="overview"
                                    type="textarea"
                                    placeholder="Overview here"
                                    value={overview}
                                    onChange={setOverview}
                                />
                            </li>
                            <li>
                                <TextInput
                                    name="runtime"
                                    title="runtime"
                                    placeholder="Runtime here"
                                    value={runtime}
                                    onChange={setRuntime}
                                />
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
                            <button className="sbmt-btn border-r" onClick={onConfirm}>CONFIRM</button>
                        </>
                    )}
                </div>
            </div>
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
