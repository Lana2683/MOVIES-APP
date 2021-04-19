import React, {useEffect, useState} from 'react';
import Header from "./Header";
import { useLocation } from "react-router-dom";
import { connect } from "react-redux";
import { getMovies } from "../Actions/actions";
import Main from "./Main";
import PropTypes from "prop-types";


const useQuery = () => new URLSearchParams(useLocation().search)


const NoMovieFound = ({ moviesList, toggleMovieModal }) => {
    const [searchedFilm, setSearchedFilm] = useState('');
    const query = useQuery();
    const filmName = query.get("title");
    const getFilteredFilms = () => {
        return filmName ? moviesList.filter(movie => movie.title === searchedFilm) : [];
    }
    useEffect(() => {
        if (searchedFilm) {
            getFilteredFilms()
        }
    }, [searchedFilm])
    return (
        <div className='container'>
            <Header
                title='find your movie'
                toggleAddMovieModal={toggleMovieModal}
                searchedFilm={searchedFilm}
                setSearchedFilm={setSearchedFilm}
            />
            <Main films={getFilteredFilms()} isSearch/>
        </div>
    );
}

NoMovieFound.prototypes = {
    toggleMovieModal: PropTypes.func.isRequired,
    moviesList: PropTypes.array.isRequired,
}

const mapStateToProps = (state) => ({
    moviesList: state.movies.moviesList,
});

const mapDispatchToProps = {
    getMovies,
};

export default connect(mapStateToProps, mapDispatchToProps)(NoMovieFound);
