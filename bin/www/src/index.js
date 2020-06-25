import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import App from './App'
import Reviews from './Store/Reviews';
import {loadReviews} from './Actions';

Reviews.dispatch(loadReviews(false, true));

window.store = () => Reviews.getState();

ReactDOM.render(
    <Provider store={Reviews}>
        <App/>
    </Provider>,
    document.getElementById('root')
);
