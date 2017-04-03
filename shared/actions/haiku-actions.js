import superagent from 'superagent';
import config from '../config.js';

const { API } = config;
const SERVER_ERROR = 'Server Error - please try again.';

export function addHaiku(data) {
    return {
        type: 'ADD_HAIKU',
        payload: data
    };
};

export function clearAllHaikus() {
    return {
        type: 'CLEAR_ALL_HAIKUS'
    };
};

export function requestKeywordSearch(keyword) {
    if (!keyword) {
        return { type: 'LOADING', payload: false };
    }

    return dispatch => {
        dispatch({ type: 'LOADING', payload: true });

        superagent.post(API.URL + API.ENDPOINTS.KEYWORD_SEARCH)
        .send({ keyword })
        .end((error, response) => {
            dispatch({ type: 'LOADING', payload: false });

            if (error) {
                dispatch({
                    type: 'ERROR',
                    payload: SERVER_ERROR
                });
            } else {
                response.body.forEach(item => {
                    dispatch({
                        type: 'ADD_HAIKU',
                        payload: item
                    });
                });
            }
        });
    };
};