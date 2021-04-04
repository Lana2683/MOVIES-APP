import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware  from 'redux-thunk';

import rootReducer  from './Reducers/rootReducer';

const initialState = {};

const store = createStore(rootReducer, initialState, compose(applyMiddleware(thunkMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__&&
    window.__REDUX_DEVTOOLS_EXTENSION__()
));

export default store;
