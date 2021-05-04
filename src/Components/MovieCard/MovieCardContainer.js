import { connect } from 'react-redux';
import MovieCard from './MovieCard';
import { getMovie } from "../../../modules/movies";

const mapDispatchToProps = {
    getMovie
};

export default connect(() => ({}), mapDispatchToProps)(MovieCard);
