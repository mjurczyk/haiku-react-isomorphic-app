import setError from './set-error';
import setLoadingState from './set-loading-state';

const defaultState = {
    error: null,
    loading: false
};

export default function runtimeReducer(state = defaultState, action) {
    if (action.type === 'ERROR') {
        return setError(state, action);
    } else if (action.type === 'LOADING') {
        return setLoadingState(state, action);
    } else {
        return state;
    }
};