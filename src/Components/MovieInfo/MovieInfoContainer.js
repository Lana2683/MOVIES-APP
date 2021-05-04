import { connect } from 'react-redux';
import { getMovie } from "../../../modules/movies";
import { MovieModal } from "../MovieModal/MovieModal";

const mapStateToProps = (state) => ({
    movie: state.movies.movie || {},
});

const mapDispatchToProps = {
    getMovie
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieModal);
