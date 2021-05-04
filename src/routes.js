import React from "react";

import MovieInfo from './Components/MovieInfo/MovieInfo';
import NotFound  from './Components/NotFound/NotFound'
import NoMovieFound  from "./Components/NoMovieFound/NoMovieFound";
import Homepage from './Components/Homepage/Homepage.js';


const routes = [
    {
        path: '/',
        exact: true,
        component: Homepage
    },
    {
        path: '/film/:id',
        exact: true,
        component: MovieInfo
    },
    {
        path: '/search',
        exact: true,
        component: NoMovieFound
    },
    {
        path: '*',
        exact: true,
        component: NotFound
    },
];

export default routes;
