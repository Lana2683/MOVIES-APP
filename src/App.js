import React, { StrictMode } from 'react';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { hot } from 'react-hot-loader';

import Homepage from './Components/Homepage/Homepage.js';
import MovieInfo from './Components/MovieInfo/MovieInfo';
import NotFound  from './Components/NotFound/NotFound'
import NoMovieFound from "./Components/NoMovieFound/NoMovieFound";
import { useToggle } from "./Components/Consts";
import MovieModal from "./Components/MovieModal/MovieModal";

const App = ({ Router, location, context, store }) => {
    const [isAddMovieModalShown, toggleMovieModal] = useToggle(false);

    return (
        <Router location={location} context={context}>
            <StrictMode>
                <Provider store={store}>

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
                 </Provider>
            </StrictMode>
        </Router>
    )
}

export default hot(module)(App);
