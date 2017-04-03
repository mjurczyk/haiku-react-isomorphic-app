export default (state, action) => {
    let newState = state.slice(0);

    newState.push(action.payload);
    
    return newState;
};