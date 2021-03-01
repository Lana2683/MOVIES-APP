import React from 'react';
import { mockedMovies } from './Consts';
import MovieList from './MovieList';

export const Main = () =>
    <>
        <MovieList movies={mockedMovies}/>
    </>

export default Main;
