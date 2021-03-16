import React, { useState, useEffect, useRef } from 'react';

import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ErrorBoundary from './ErrorBoundary';
import { MovieModal } from './MovieModal';
import { MovieInfo } from './MovieInfo';
import { useToggle } from './Consts';

import './Homepage.css';

export const Homepage = () => {
    const [movieInfo, setMovieInfo] = useState({});
    const [isMovieInfoShown, setIsMovieInfoShown] = useState(false);
    const [isAddMovieModalShown, toggleMovieModal] = useToggle(false);

    const flag = useRef(true);

    useEffect(() => {
        if (flag.current) {
            flag.current = false;
        } else {
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
                <Main
                    toggleMovieModal={toggleMovieModal}
                    setMovieInfo={setMovieInfo}
                    showMovieInfoShown={setIsMovieInfoShown}
                    movieInfo={movieInfo}
                />
            </ErrorBoundary>
            <Footer/>
        </div>
    );
}

export default Homepage;
