import React, {Component} from 'react';
import { mockedMovies } from './Consts';
import MovieCard from "./MovieCard";
import {MovieModal} from "./MovieModal";

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditMovieModalShown: false,
            isDeleteModalShown:false,
        }
    }

    toggleModal = (name) => {
        this.setState(prevState => ({
            [name]: !prevState[name]
        }))
    }

    handleToggleEditMovieModal = () => {
        this.toggleModal('isEditMovieModalShown')
    }

    handleToggleDeleteModal = () => {
        this.toggleModal('isDeleteModalShown')
    }

    render() {
        return (
            <>
                <div className="movie-list">
                    {mockedMovies.map(movie =>
                        <MovieCard
                            key={movie.id}
                            movie={movie}
                            toggleEditMovieModal={this.handleToggleEditMovieModal}
                            toggleDeleteMovieModal={this.handleToggleDeleteModal}
                        />
                    )}
                </div>
                {this.state.isEditMovieModalShown &&
                <MovieModal toggleMovieModal={this.handleToggleEditMovieModal} text={'edit movie'} isEdit/>}
                {this.state.isDeleteModalShown &&
                <MovieModal toggleMovieModal={this.handleToggleDeleteModal} text={'delete movie'} isDelete/>}
            </>
        );
    }
}

export default Main;
