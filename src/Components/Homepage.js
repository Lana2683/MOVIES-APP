import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ErrorBoundary from './ErrorBoundary';
import './Homepage.css';

export const Homepage = () =>
    <>
        <div className='container'>
            <Header title='find your movie'/>
            <ErrorBoundary>
                <Main/>
            </ErrorBoundary>
            <Footer/>
        </div>
    </>

export default Homepage;
