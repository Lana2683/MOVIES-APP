import React from 'react';
import PropTypes from 'prop-types';

import { mockedMovies, useToggle } from './Consts';
import { MovieCard } from "./MovieCard";
import { MovieModal } from "./MovieModal";

export const Main = ({ setMovieInfo, showMovieInfo }) => {
    const [isEditMovieModalShown, toggleEditMovieModal] = useToggle(false);
    const [isDeleteModalShown, toggleDeleteMovieModal] = useToggle(false);

    return (
        <>
            <div className="movie-list">
                {mockedMovies.map(movie =>
                    <MovieCard
                        key={movie.id}
                        movie={movie}
                        toggleEditMovieModal={toggleEditMovieModal}
                        toggleDeleteMovieModal={toggleDeleteMovieModal}
                        setMovieInfo={setMovieInfo}
                        showMovieInfo={showMovieInfo}
                    />
                )}
            </div>
            {isEditMovieModalShown &&
            <MovieModal toggleMovieModal={toggleEditMovieModal} text={'edit movie'} isEdit/>}
            {isDeleteModalShown &&
            <MovieModal toggleMovieModal={toggleDeleteMovieModal} text={'delete movie'} isDelete/>}
        </>
    );
}

Main.prototypes = {
    setMovieInfo: PropTypes.func.isRequired,
    showMovieInfo: PropTypes.func.isRequired,
}

export default Main;
