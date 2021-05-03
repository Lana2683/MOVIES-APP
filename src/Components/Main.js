import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { FILTERS, useToggle } from './Consts';
import MovieCard from "./MovieCard";
import MovieModal from "./MovieModal";

import { getMovies, sortMovies, filterMovies } from '../Actions/actions'

const Main = ({
  moviesList,
  films,
  isSearch,
  getMovies,
  sortMovies,
  sortedMoviesList,
  filteredMoviesList,
  filterMovies
}) => {
    const [isEditMovieModalShown, toggleEditMovieModal] = useToggle(false);
    const [isDeleteModalShown, toggleDeleteMovieModal] = useToggle(false);
    const [isSorting, setIsSorting] = useState(false);
    const [isFiltering, setIsFiltering] = useState(false);

    useEffect(() => {
        if (!isSearch) {
            getMovies()
        }
    }, [])

    const getMoviesList = () => {
        if (isSorting) {
            return sortedMoviesList;
        }
        if (isFiltering) {
            return filteredMoviesList;
        }
        return isSearch ? films : moviesList;
    }

    const onSelect = (e) => {
        setIsSorting(true);
        sortMovies(e.target.value);
    }

    const filterItem = (item) => {
        setIsFiltering(true);
        filterMovies(item);
    }

    const selectAll = () => {
        setIsSorting(true);
        setIsFiltering(true);
    }


    return (
        <div className="main">
            <nav className="nav-bar">
                <div>
                    <span className="nav-item" onClick={() => selectAll()}>ALL</span>
                    {FILTERS.map(item => (
                        <span key={item} className="nav-item" onClick={() => filterItem(item)}>{item.toUpperCase()}</span>)
                    )}
                </div>
                <div>
                    <span className="nav-item-sort">SORT BY</span>
                    <select className="nav-item-dropdown" onChange={(e) => onSelect(e)}>
                        <option value="release_date">RELEASE DATE</option>
                        <option value="rating">RATING</option>
                    </select>
                </div>
            </nav>
            <div className="movie-list">
                {getMoviesList().map(movie =>
                    <MovieCard
                        key={movie.id}
                        movie={movie}
                        toggleEditMovieModal={toggleEditMovieModal}
                        toggleDeleteMovieModal={toggleDeleteMovieModal}
                    />
                )}
            </div>
            {isEditMovieModalShown &&
            <MovieModal toggleMovieModal={toggleEditMovieModal} text={'edit movie'} isEdit/>}
            {isDeleteModalShown &&
            <MovieModal toggleMovieModal={toggleDeleteMovieModal} text={'delete movie'} isDelete/>}
        </div>
    );
}

Main.prototypes = {
    sortMovies: PropTypes.func.isRequired,
    filterMovies: PropTypes.func.isRequired,
    moviesList: PropTypes.array.isRequired,
    films: PropTypes.array,
    isSearch:  PropTypes.bool,
    getMovies: PropTypes.func.isRequired,
    sortedMoviesList: PropTypes.array,
    filteredMoviesList: PropTypes.array,
}

const mapStateToProps = (state) => ({
    sortedMoviesList: state.movies.sortedMoviesList,
    filteredMoviesList: state.movies.filteredMoviesList,
    moviesList: state.movies.moviesList,
});

const mapDispatchToProps = {
    sortMovies,
    filterMovies,
    getMovies
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
