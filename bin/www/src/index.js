import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import App from './App'
import Reviews from './Store/Reviews';
import {loadReviews} from './Actions';

setTimeout(() => Reviews.dispatch(loadReviews(false, true)), 1000);

window.store = () => Reviews.getState();

ReactDOM.render(
    <Provider store={Reviews}>
        <App/>
    </Provider>,
    document.getElementById('root')
);
