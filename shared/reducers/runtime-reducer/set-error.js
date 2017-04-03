export default (state, action) => {
    let newState = { ...state };

    newState.error = action.payload;

    return newState;
};