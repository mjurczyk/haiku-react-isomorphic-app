import addHaiku from './add-haiku';
import clearAllHaikus from './clear-all-haikus';

const defaultState = [];

export default function haikuReducer(state = defaultState, action) {
    if (action.type === 'ADD_HAIKU') {
        return addHaiku(state, action);
    } else if (action.type === 'CLEAR_ALL_HAIKUS') {
        return clearAllHaikus(state, action);
    } else {
        return state;
    }
};