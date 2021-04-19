import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import store from './store'

import Homepage from './Components/Homepage.js';
import MovieInfo from './Components/MovieInfo';
import NotFound  from './Components/NotFound'
import  NoMovieFound  from "./Components/NoMovieFound";
import { useToggle } from "./Components/Consts";
import MovieModal from "./Components/MovieModal";

export const App = () => {
    const [isAddMovieModalShown, toggleMovieModal] = useToggle(false);

    return (
        <Provider store={store}>
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Homepage toggleMovieModal={toggleMovieModal}/>
                    </Route>
                    <Route exact path="/film/:id" component={MovieInfo}/>
                    <Route exact path="/search">
                        <NoMovieFound toggleMovieModal={toggleMovieModal}/>
                    </Route>
                    <Route exact path="*" component={NotFound}/>
                </Switch>
                {isAddMovieModalShown &&
                <MovieModal toggleMovieModal={toggleMovieModal} text={'add movie'}/>}
            </Router>
        </Provider>
    )
}

export default App;
