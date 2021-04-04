import React from 'react';
import { Provider } from 'react-redux';
import store from './store'


import { Homepage } from './Components/Homepage.js';

export const App = () =>
    <Provider store={store}>
      <Homepage/>
    </Provider>

export default App;
