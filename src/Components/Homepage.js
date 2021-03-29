import React, { useState, useEffect } from 'react';

import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ErrorBoundary from './ErrorBoundary';
import MovieModal from './MovieModal';
import { MovieInfo } from './MovieInfo';
import { useToggle } from './Consts';

import './Homepage.css';

export const Homepage = () => {
    const [movieInfo, setMovieInfo] = useState(null);
    const [isMovieInfoShown, setIsMovieInfoShown] = useState(false);
    const [isAddMovieModalShown, toggleMovieModal] = useToggle(false);

    useEffect(() => {
        if (movieInfo) {
            setIsMovieInfoShown(true)
        }
    }, [movieInfo]);

    return (
        <div className='container'>
            {isMovieInfoShown ?
                <MovieInfo movie={movieInfo} closeMovieInfo={setIsMovieInfoShown}/> :
                <Header title='find your movie' toggleAddMovieModal={toggleMovieModal}/>
            }
            <ErrorBoundary>
                {isAddMovieModalShown &&
                <MovieModal toggleMovieModal={toggleMovieModal} text={'add movie'}/>}
                <Main setMovieInfo={setMovieInfo}/>
            </ErrorBoundary>
            <Footer/>
        </div>
    );
}

export default Homepage;
