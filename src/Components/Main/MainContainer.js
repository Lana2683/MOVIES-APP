import { connect } from 'react-redux';
import Main from './Main';
import { filterMovies, getMovies, sortMovies } from "../../../modules/movies";

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
