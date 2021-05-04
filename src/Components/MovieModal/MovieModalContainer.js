import { connect } from 'react-redux';
import MovieModal from './MovieModal';
import {addMovie, deleteMovie, updateMovie} from "../../../modules/movies";

const mapStateToProps = (state) => ({
    movie: state.movies.movie ? state.movies.movie : {}
});

const mapDispatchToProps = {
    updateMovie,
    addMovie,
    deleteMovie
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieModal);
