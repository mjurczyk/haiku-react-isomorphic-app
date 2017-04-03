import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'
import App from '../shared/components/app/App';
import reducers from '../shared/reducers';

import '../shared/styles/main.scss';

const initialState = window.__INITIAL_STATE__;
const store = createStore(
    reducers,
    initialState,
    applyMiddleware(thunk)
);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector('#root')
);