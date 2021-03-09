import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './MoveCard.css';

class MovieCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isMenuShown: false,
        }
    }

    showMenu = () => {
        this.setState({ isMenuShown: true })
    }

    showEditModal = () => {
        this.props.toggleEditMovieModal();
        this.setState({ isMenuShown: false })
    }

    showDeleteModal = () => {
        this.props.toggleDeleteMovieModal();
        this.setState({ isMenuShown: false })
    }

    render() {
        const { movie } = this.props;
        return (
            <div className="d-column movie">
                <div className="card">
                    {this.state.isMenuShown ? (
                        <ul className="card-menu">
                            <li onClick={this.showEditModal}>Edit</li>
                            <li onClick={this.showDeleteModal}>Delete</li>
                        </ul>
                    ) : (
                        <span className="kebab-icon" onClick={this.showMenu}>&#8942;</span>
                    )}
                </div>
                <div className="description">
                    <div className="d-column">
                        <span className="movie-name">{movie.name}</span>
                        <span className="movie-genre">{movie.genre}</span>
                    </div>
                    <div className="year">{movie.year}</div>
                </div>
            </div>
        );
    }
}

MovieCard.prototypes = {
    movie: PropTypes.object.isRequired,
    toggleEditMovieModal: PropTypes.func.isRequired,
    toggleDeleteMovieModal: PropTypes.func.isRequired,
}

export default MovieCard;
