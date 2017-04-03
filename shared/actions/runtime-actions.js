export function showLoading(state) {
    return {
        type: 'LOADING',
        payload: state
    };
};

export function setError(error) {
    return {
        type: 'ERROR',
        payload: error
    };
};
