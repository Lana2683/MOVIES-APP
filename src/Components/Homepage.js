import React, {Component} from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ErrorBoundary from './ErrorBoundary';
import './Homepage.css';
import { MovieModal } from "./MovieModal";

class Homepage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isAddMovieModalShown: false
        }
    }

    handleToggleAddMovieModal = () => {
        this.setState(prevState => ({
            isAddMovieModalShown: !prevState.isAddMovieModalShown
        }))
    }

    render() {
        return (
            <div className='container'>
                <Header title='find your movie' toggleAddMovieModal={this.handleToggleAddMovieModal}/>
                <ErrorBoundary>
                    {this.state.isAddMovieModalShown &&
                    <MovieModal toggleMovieModal={this.handleToggleAddMovieModal} text={'add movie'}/>}
                    <Main/>
                </ErrorBoundary>
                <Footer/>
            </div>
    );
    }
}

export default Homepage;
