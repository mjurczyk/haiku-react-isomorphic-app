'use strict';

import express from 'express';
import bodyParser from 'body-parser';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducers from '../shared/reducers';
import App from '../shared/components/app/App';
import templateBase from './templateBase';
import keywordSearchEndpoint from './endpoints/keyword-search';

const server = express();
const port = process.env.PORT || 8080;

server.use(express.static('dist'));
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

server.get('/', (request, response) => {
    const store = createStore(reducers, applyMiddleware(thunk));
    const initialState = JSON.stringify(store.getState());
    const rootComponent = (
        <Provider store={store}>
            <App />
        </Provider>
    );
    const renderedHtml = renderToString(rootComponent);
    const htmlTemplate = templateBase(renderedHtml, initialState);

    response.end(htmlTemplate);
});

server.post('/api/search', (request, response) => {
    const keyword = request.body.keyword;

    if (!keyword) {
        response.status(500);
        response.end('⚠️  Keyword not defined.');
    } else {
        console.info(`❔  Queried for '${keyword}', searching ...`);

        keywordSearchEndpoint(keyword).then(result => {
            response.json(result);
        })
        .catch(error => {
            console.error(error);

            response.status(500);
            response.end();
        });
    }
});

server.listen(port, () => {
    console.info(`🚀  Server listening on port ${port} ...`);
});
