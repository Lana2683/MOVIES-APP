import React from 'react';
import PropTypes from 'prop-types';

import { mockedMovies } from './Consts';
import { MovieCard } from "./MovieCard";
import { MovieModal } from "./MovieModal";

export const Main = ({ useToggle, setMovieInfo, showMovieInfo }) => {
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
                        useToggle={useToggle}
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
    useToggle: PropTypes.func.isRequired,
    setMovieInfo: PropTypes.func.isRequired,
    showMovieInfo: PropTypes.func.isRequired,
}

export default Main;
