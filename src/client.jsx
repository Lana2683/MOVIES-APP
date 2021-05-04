import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import  configureStore from '../modules/configureStore'

import App from './App';

const store = configureStore();

const app = (
    <App
        Router={BrowserRouter}
        store={store}
    />
)

hydrate(app, document.getElementById('root'));
