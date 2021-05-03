import React, { useState } from 'react';
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";

import Main from './Main';
import Footer from './Footer';
import ErrorBoundary from './ErrorBoundary';
import Header from "./Header";

import './Homepage.css';

export const Homepage = ({ toggleMovieModal }) => {
    const [isSearch, setIsSearch] = useState(false);

    return (
        <div className='container'>
            <Header title='find your movie' toggleAddMovieModal={toggleMovieModal} setIsSearch={setIsSearch}/>
            <ErrorBoundary>
                {isSearch && <Redirect to="/search"/>}
                <Main/>
            </ErrorBoundary>
            <Footer/>
        </div>
    );
}

Homepage.prototypes = {
    isAddMovieModalShown: PropTypes.bool.isRequired,
    toggleMovieModal: PropTypes.func.isRequired,
}

export default Homepage;
