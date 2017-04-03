export default (state, action) => {
    let newState = { ...state };

    newState.loading = action.payload;

    return newState;
};